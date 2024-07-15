const waitLoading = async (number: number) => {
  return new Promise((resolve) => setTimeout(resolve, number))
}

export default waitLoading
