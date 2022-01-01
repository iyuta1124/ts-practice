export default function primitiveSample(): void {
  const name = 'トラハック'
  // name = 123

  console.log('primitive sample1', typeof name, name)

  const age = 28
  console.log('primitive sample1', typeof age, age)

  const isSingle = true
  console.log('primitive sample1', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitive sample1', typeof isOver20, isOver20)
}
