import jokesInstance from './axios.instance'
import type { JokesApi } from './types'

export default {
  get: async ({ limit }) =>
    await jokesInstance
      .get('jokes/', { params: { limit } })
      .then((r) => r.data),
} satisfies JokesApi
