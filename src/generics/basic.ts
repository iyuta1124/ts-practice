export default function genericsBasicSample(): void {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log(stringReduce(['may ', 'the ', 'for'], 'aaa'))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log(numberReduce([1, 2, 3], 3))

  // type Reduce = {
  //   (array: string[, initialValue: string]): string
  //   (array: number[, initialValue: number]): number
  // }

  // (array: number[, initialValue: number]): number
  type genericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: genericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  // console.log()

  //色々なジェネリック型の定義
  //完全な呼び出しシグネチャ

  type genericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], iniUialValue: T): T
  }

  //呼び出しシグネチャの省略記法
  type genericReduce3<T> = (array: T[], initialValue: T) => T
  type genericReduce4 = <T>(array: T[], initialValue: T) => T
}
