import type { Joke } from '../../models/joke'
import type { ServiceFunction } from '../types'

export interface JokesApi {
  get: ServiceFunction<GetJokesRequest, GetJokesResponse>
}

export interface GetJokesRequest {
  limit?: number
}
export type GetJokesResponse = Joke[]
