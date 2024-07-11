'use client'

import { FC, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { LINKSUPERLARGE } from '@/constants/mouse'

const Mouse: FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const updateCursorPosition = ({ clientX, clientY }: MouseEvent) => {
      if (cursorRef.current) {
        const { clientWidth, clientHeight, style } = cursorRef.current
        style.transform = `translate(${clientX - clientWidth / 2}px, ${clientY - clientHeight / 2}px)`
      }
    }

    const handleMouseLeave = () => cursorRef.current?.classList.remove(LINKSUPERLARGE)
    const handleMouseEnter = () => cursorRef.current?.classList.add(LINKSUPERLARGE)

    const addListeners = (element: Element) => {
      element.addEventListener('mouseleave', handleMouseLeave)
      element.addEventListener('mousemove', handleMouseEnter)
    }
    const removeListeners = (element: Element) => {
      element.removeEventListener('mouseleave', handleMouseLeave)
      element.removeEventListener('mousemove', handleMouseEnter)
    }

    document.addEventListener('mousemove', updateCursorPosition)
    const cursorScaleElements = document.querySelectorAll('.cursorScale')
    cursorScaleElements.forEach(addListeners)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      cursorScaleElements.forEach(removeListeners)
    }
  }, [])

  return <motion.div className='mouse' ref={cursorRef} />
}

export default Mouse
