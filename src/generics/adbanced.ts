export default function genericAdvancedSample() {
  // map関数
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const numbers = mapStringsNumbers(['123', '456'], (item) => Number(item))
  console.log(numbers)
}
