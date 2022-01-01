export default function arraySample(): void {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  //  colors.push(123)
  console.log(colors)

  const even: Array<number> = [1, 2, 3]
  console.log(even)

  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('AVC')
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(123)
  // someArray.push(true)
  console.log(someArray)
}
