const variants = (
  opaA: number,
  yA: number,
  typeA: string,
  stiffA: number,
  dampA: number,
  opaB: number,
  yB: number,
  typeB: string,
  stiffB: number,
  dampB: number,
  delay: number,
  duration: number
) => ({
  hidden: {
    opacity: opaA,
    y: yA,
    transition: {
      type: typeA,
      stiffness: stiffA,
      damping: dampA
    }
  },
  show: {
    opacity: opaB,
    y: yB,
    transition: {
      type: typeB,
      stiffness: stiffB,
      damping: dampB,
      delay,
      duration
    }
  }
})
export const firstAppearVariants = variants(0, 20, '', 0, 0, 1, 0, '', 0, 0, 0.4, 0.4)
export const secondAppearVariants = variants(0, 30, '', 0, 0, 1, 0, '', 0, 0, 0.8, 0.4)
export const thirdAppearVariants = variants(0, 40, '', 0, 0, 1, 0, '', 0, 0, 1.2, 0.4)
export const titleVariants = variants(0, 0, '', 0, 0, 1, 0, '', 0, 0, 0.4, 0.4)
export const hoverVariants = variants(1, 0, 'spring', 80, 10, 0, -20, 'spring', 80, 10, 0.1, 0.3)
export const loadingVariants = variants(0, 200, 'spring', 800, 0, 1, 0, 'spring', 100, 10, 0, 0)
export const shapeVariants = variants(0, 10, 'spring', 100, 0, 1, 0, 'spring', 100, 10, 0.3, 1)

export const chevronsLeftVariants = {
  initial: { x: '100%' },
  animate: {
    x: '-100%',
    transition: {
      repeat: Infinity,
      duration: 1.25,
      repeatType: 'loop' as const,
      ease: 'linear' as const
    }
  },
  exit: { x: '100%' }
}
export const arrowTransition = {}
