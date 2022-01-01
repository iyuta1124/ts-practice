export default function notExistSample(): void {
  let name = null
  console.log(typeof name, name)

  name = 'aaa'
  if (!name) {
    console.log('吾輩は猫である、名前はまだ' + name)
  } else {
    console.log('吾輩は猫である。名前は' + name)
  }

  const age = undefined
  console.log(age)
}
