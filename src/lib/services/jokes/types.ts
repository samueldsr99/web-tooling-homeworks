import type { Joke } from '$lib/models/joke'

import type { ServiceFunction } from '../types'

export interface JokesApi {
  get: ServiceFunction<GetJokesRequest, GetJokesResponse>
}

export interface GetJokesRequest {
  category: string
  amount: number
}
export type GetJokesResponse = {
  error: boolean
  amount: number
  jokes: Joke[]
}
