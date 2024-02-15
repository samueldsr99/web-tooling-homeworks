<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs'
  import { Link } from 'svelte-routing'

  export let category: string
</script>

<Tabs.Root value={category} class="w-[400px]">
  <Tabs.List>
    <Tabs.Trigger value="any">
      <Link to="/jokes">Any</Link>
    </Tabs.Trigger>
    <Tabs.Trigger value="programming">
      <Link to="/jokes?category=programming">Programming</Link>
    </Tabs.Trigger>
    <Tabs.Trigger value="dark">
      <Link to="/jokes?category=dark">Dark</Link>
    </Tabs.Trigger>
    <Tabs.Trigger value="pun">
      <Link to="/jokes?category=pun">Pun</Link>
    </Tabs.Trigger>
    <Tabs.Trigger value="christmas">
      <Link to="/jokes?category=christmas">Christmas</Link>
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">
    Make changes to your account here.
  </Tabs.Content>
  <Tabs.Content value="password">Change your password here.</Tabs.Content>
</Tabs.Root>
