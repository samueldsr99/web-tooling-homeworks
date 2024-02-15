export type JokeType = 'single' | 'twopart'

export type Joke = {
  id: number
  category: string
  type: JokeType
} & (SingleJoke | TwoPartJoke)

export interface SingleJoke {
  type: 'single'
  joke: string
}

export type TwoPartJoke = {
  type: 'twopart'
  setup: string
  delivery: string
}
