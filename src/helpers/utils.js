export const randomChoice = arr => {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

export const randomBoolean = () => (Math.random() >= 0.5)