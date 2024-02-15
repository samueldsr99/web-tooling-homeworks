<script lang="ts">
  import CategoriesTabs from '$lib/components/jokes/categories-tabs.svelte'
  import JokeCard from '$lib/components/jokes/joke-card.svelte'
  import { useLocation } from 'svelte-routing'

  let location = useLocation()

  $: category = new URLSearchParams($location.search).get('category') || 'any'
</script>

<main class="max-w-8xl container px-10 pb-4 pt-10">
  <div class="border-b border-border pb-2">
    <h1 class="text-5xl font-extrabold">Jokes</h1>
  </div>

  <div class="pt-6">
    <CategoriesTabs category={category ?? 'any'} />

    <span class="text-center text-5xl">😐</span>

    <div>
      <JokeCard
        content={{ first: 'Why did the chicken cross the road?' }}
        category="animal"
      />
    </div>
  </div>
</main>
