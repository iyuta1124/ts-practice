export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log(userId, username)
    return true
  } else {
    console.log(userId, username)
    return false
  }
}

export const isUserSignedIn2 = (userId: string, username = 'NONAME'): boolean => {
  if (userId === 'ABC') {
    console.log(userId, username)
    return true
  } else {
    console.log(userId, username)
    return false
  }
}

export const sumProductsPrice = (...productPrice: number[]): number => {
  return productPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}

type logMessage = (message: string) => void
const logMessage4: logMessage = (message) => {
  console.log(message)
}
