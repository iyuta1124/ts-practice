export default function tupleSample(): void {
  const response: [number, string] = [200, 'OK']
  console.log(response)

  const girlFrends: [string, ...string[]] = ['kana', 'miku', 'misa']
  girlFrends.push('keiko')
  console.log(girlFrends)

  const mutableNumbers: number[] = [1, 2, 3]
  mutableNumbers[2] = 4

  //  const commands: readonly number[] = [1,2,3]
  // const commands: ReadonlyArray<number> = [1, 2, 3]
}
