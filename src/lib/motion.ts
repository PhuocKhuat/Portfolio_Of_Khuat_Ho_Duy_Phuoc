const textAppearVariants = (y: number, delay: number) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay
    }
  }
})
export const firstAppearVariants = textAppearVariants(20, 0.4)
export const secondAppearVariants = textAppearVariants(30, 0.8)
export const thirdAppearVariants = textAppearVariants(40, 1.2)
export const titleVariants = textAppearVariants(0, 0.2)

export const hoverVariants = {
  initial: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 140
    }
  },
  hover: {
    y: -20,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.1
    }
  }
}
