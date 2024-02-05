<script lang="ts">
    import { onMount } from 'svelte'
    import { Link } from 'svelte-routing'
    import services from '../../lib/services'
    import type { Joke } from '../../lib/models/joke'

    let jokes: Joke[] = []

    onMount(async () => {
        jokes = await services.jokes.get({ limit: 10 })
    })
</script>

<div>
    <nav>
        <Link to="/">Home</Link>
    </nav>
    <h1>Jokes</h1>

    <ul>
        {#each jokes as joke}
            <li>{joke.joke}</li>
        {/each}
    </ul>
</div>
