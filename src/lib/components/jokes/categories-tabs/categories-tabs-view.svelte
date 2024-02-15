<script lang="ts">
  import { Router } from 'svelte-routing'
  import CategoriesTabs from './categories-tabs.svelte'

  export let category: string
</script>

<Router>
  <CategoriesTabs {category} />
</Router>
