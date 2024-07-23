'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { LINKSUPERLARGE } from '@/constants/mouse'

const Mouse: FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const [cursorText, setCursorText] = useState<string>('')

  useEffect(() => {
    const updateCursorPosition = ({ clientX, clientY }: MouseEvent) => {
      if (cursorRef.current) {
        const { clientWidth, clientHeight, style } = cursorRef.current
        style.transform = `translate(${clientX - clientWidth / 2}px, ${clientY - clientHeight / 2}px)`
      }
    }

    const handleMouseLeave = () => {
      cursorRef.current?.classList.remove(LINKSUPERLARGE)
      setCursorText('')
    }

    const handleMouseEnterScroll = () => {
      cursorRef.current?.classList.add(LINKSUPERLARGE)
      setCursorText('scroll')
    }

    const handleMouseEnterOpen = () => {
      cursorRef.current?.classList.add(LINKSUPERLARGE)
      setCursorText('open')
    }

    const addListeners = (element: Element, handleMouseEnter: (event: Event) => void) => {
      element.addEventListener('mouseleave', handleMouseLeave)
      element.addEventListener('mouseenter', handleMouseEnter)
    }

    const cursorScaleElementsScroll = document.querySelectorAll('.cursorScaleScroll')
    const cursorScaleElementsOpen = document.querySelectorAll('.cursorScaleOpen')

    cursorScaleElementsScroll.forEach((element) => addListeners(element, handleMouseEnterScroll))
    cursorScaleElementsOpen.forEach((element) => addListeners(element, handleMouseEnterOpen))

    document.addEventListener('mousemove', updateCursorPosition)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      cursorScaleElementsScroll.forEach((element) => {
        element.removeEventListener('mouseleave', handleMouseLeave)
        element.removeEventListener('mouseenter', handleMouseEnterScroll)
      })
      cursorScaleElementsOpen.forEach((element) => {
        element.removeEventListener('mouseleave', handleMouseLeave)
        element.removeEventListener('mouseenter', handleMouseEnterOpen)
      })
    }
  }, [])

  return (
    <div className='mouse' ref={cursorRef}>
      {cursorText}
    </div>
  )
}

export default Mouse
