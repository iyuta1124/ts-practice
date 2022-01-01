export default function objectSample() {
  // const a:object = {
  //   name: 'torahack',
  //   age: 28
  // }

  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'japan',
  }

  console.log(country)

  country = {
    language: 'English',
    name: 'America',
  }

  console.log(country)

  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'YAMADA',
    firstName: 'Tarou',
  }

  torahack.gender = 'male'
  console.log(torahack)

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'TOKYO',
    Korea: 'seoil',
  }

  capitals.China = 'beijing'
  console.log(capitals)

  type Country = {
    capital: string
    laungage: string
    name: string
  }
  const japan: Country = {
    capital: 'Tokyo',
    laungage: 'japanese',
    name: 'aaa',
  }
  console.log(japan)

  //合併型と交差型
  type knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type wizard = {
    hp: number
    sp: number
    weapon: string
    magicSkill: string
  }
  //合併型
  type Adventurer = knight | wizard
  // 交差型
  // type Paladin = knight & wizard

  const adbentuer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の件',
    swordSkill: '三連斬り',
  }

  const adbentuer2: Adventurer = {
    hp: 30,
    sp: 100,
    weapon: '杖',
    magicSkill: '日出す',
  }

  // const paladin: Paladin = {
  //   hp: 30,
  //   sp: 100,
  //   weapon: '杖',
  //   magicSkill: '日出す',
  //   // swordSkill: "三連斬り"
  // }

  // console.log(adbentuer1, adbentuer2, paladin)
}
