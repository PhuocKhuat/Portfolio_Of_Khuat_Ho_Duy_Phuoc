'use client'

import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Mouse: FC = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }
  return <motion.div className='mouse' variants={variants} animate='default'></motion.div>
}

export default Mouse
