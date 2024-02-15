<script>
  import Button from '$lib/components/ui/button/button.svelte'
  import { Link } from 'svelte-routing'
</script>

<main class="">
  <div class="container mt-48 max-w-lg px-3">
    <h1 class="text-center text-5xl font-extrabold">Good bad jokes</h1>
    <h2 class="mt-2 px-20 text-center text-xl font-semibold text-slate-500">
      Best worst jokes out of the market. For free!
    </h2>

    <div class="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
      <Link to="/jokes" class="w-full">
        <Button class="w-full" size="xl">Get started</Button>
      </Link>
      <Link to="#" class="w-full">
        <Button class="w-full" size="xl" variant="secondary">Support</Button>
      </Link>
    </div>
  </div>
</main>
