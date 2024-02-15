<script lang="ts">
  import CategoriesTabs from '$lib/components/jokes/categories-tabs'
  import { Button } from '$lib/components/ui/button'
  import { useLocation } from 'svelte-routing'
  import api from '$lib/services'
  import type { GetJokesResponse } from '$lib/services/jokes/types'
  import JokeCard from '$lib/components/jokes/joke-card'

  let location = useLocation()

  const category =
    new URLSearchParams($location.search).get('category') || 'any'

  const getJokes = (category: string) => {
    return api.jokes.get({ category, amount: 9 })
  }

  let jokes: Promise<GetJokesResponse> = getJokes(category)
</script>

<main class="max-w-8xl container px-10 pb-4 pt-10">
  <div class="border-b border-border pb-2">
    <h1 class="text-5xl font-extrabold">Jokes</h1>
  </div>

  <div class="pt-6">
    <CategoriesTabs category={category ?? 'any'} />

    {#await jokes}
      <div class="mt-6 flex justify-center">
        <span class="text-center text-5xl">😐</span>
      </div>
    {:then data}
      <div class="mt-6 flex justify-center">
        <span class="text-center text-5xl">😐</span>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {#each data.jokes as joke}
          {#if joke.type === 'single'}
            <JokeCard content={{ first: joke.joke }} category={joke.category} />
          {:else}
            <JokeCard
              content={{ first: joke.setup, second: joke.delivery }}
              category={joke.category}
            />
          {/if}
        {/each}
      </div>

      <div class="flex justify-center">
        <Button
          variant="ghost"
          class="mt-2 text-center font-medium text-slate-400"
          on:click={() => {
            jokes = getJokes(category)
          }}
        >
          Get more... (pls don’t)
        </Button>
      </div>
    {:catch}
      <div class="mt-6 flex justify-center">
        <span class="text-center text-5xl">😐</span>
      </div>
    {/await}
  </div>
</main>
