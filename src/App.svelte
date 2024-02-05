<script lang="ts">
    import { Route, Router } from 'svelte-routing'
    const Home = () => import('./routes/index.svelte')

    export let url = ''
</script>

<Router {url}>
    <Route path="/" component={Home} />
</Router>
