interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 123,
  type: 'katai',
}

type MaboDofu = {
  calories: number
  spicylebel: number
}

type Rice = {
  calories: number
  gram: number
}

type Mabodon = MaboDofu & Rice

const Mabodon: Mabodon = {
  calories: 100,
  spicylebel: 10,
  gram: 122,
}
