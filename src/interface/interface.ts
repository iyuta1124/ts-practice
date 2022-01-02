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

interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'dairy' | 'weekly'
}

const jump: Magazine = {
  page: 300,
  title: 'ジャンプ',
  cycle: 'weekly',
}

class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    ;(this.page = page), (this.title = title)
  }

  getPublishYear() {
    return [this.title, this.publishYear]
  }
}

const popularComic = new Comic(200, '鬼滅の刃', '2021')
console.log(popularComic.getPublishYear())
