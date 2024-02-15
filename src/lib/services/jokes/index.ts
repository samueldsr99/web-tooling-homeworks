import jokesInstance from './axios.instance'
import type { JokesApi } from './types'

export default <JokesApi>{
  get: async ({ category, amount }) =>
    await jokesInstance
      .get(`/${category}`, { params: { amount } })
      .then((r) => r.data),
}
