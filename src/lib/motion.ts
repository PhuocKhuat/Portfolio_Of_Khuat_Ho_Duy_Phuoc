const TextAppearVariants = (y: number, delay: number) => ({
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

export const FirstAppearVariants = TextAppearVariants(20, 0.2)
export const SecondAppearVariants = TextAppearVariants(30, 0.8)
export const ThirdAppearVariants = TextAppearVariants(40, 1.2)
