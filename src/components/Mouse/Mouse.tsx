'use client'

import { LINKSUPERLARGE } from '@/constants/constants'
import { FC, useEffect, useRef, useState } from 'react'

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

    const handleMouseEnter = (text: string) => () => {
      cursorRef.current?.classList.add(LINKSUPERLARGE)
      setCursorText(text)
    }

    const addListeners = (element: Element, handleMouseEnter: () => void) => {
      element.addEventListener('mouseleave', handleMouseLeave)
      element.addEventListener('mouseenter', handleMouseEnter)
    }

    if (window.innerWidth > 1024) {
      const cursorScaleElementsScroll = document.querySelectorAll('.cursorScaleScroll')
      const cursorScaleElementsOpen = document.querySelectorAll('.cursorScaleOpen')
      const cursorScaleElementsView = document.querySelectorAll('.cursorScaleView')

      cursorScaleElementsScroll.forEach((element) => addListeners(element, handleMouseEnter('scroll')))
      cursorScaleElementsOpen.forEach((element) => addListeners(element, handleMouseEnter('open')))
      cursorScaleElementsView.forEach((element) => addListeners(element, handleMouseEnter('view')))
    }

    document.addEventListener('mousemove', updateCursorPosition)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      const removeListeners = (element: Element, handleMouseEnter: () => void) => {
        element.removeEventListener('mouseleave', handleMouseLeave)
        element.removeEventListener('mouseenter', handleMouseEnter)
      }

      if (window.innerWidth < 1024) {
        document
          .querySelectorAll('.cursorScaleScroll')
          .forEach((element) => removeListeners(element, handleMouseEnter('scroll')))
        document
          .querySelectorAll('.cursorScaleOpen')
          .forEach((element) => removeListeners(element, handleMouseEnter('open')))
        document
          .querySelectorAll('.cursorScaleView')
          .forEach((element) => removeListeners(element, handleMouseEnter('view')))
      }
    }
  }, [])

  return (
    <div className='mouse' ref={cursorRef}>
      {cursorText}
    </div>
  )
}

export default Mouse
