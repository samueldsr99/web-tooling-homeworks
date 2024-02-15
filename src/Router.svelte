<script lang="ts">
  import { Route, Router } from 'svelte-routing'

  const Home = () => import('./routes/index.svelte')
  const Jokes = () => import('./routes/jokes/index.svelte')

  export let url = ''
</script>

<Router {url}>
  <Route path="" component={Home} />
  <Route path="jokes" component={Jokes} />
</Router>
