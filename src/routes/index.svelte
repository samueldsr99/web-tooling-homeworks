<script>
    import Button from '$lib/components/ui/button/button.svelte'
    import { Link } from 'svelte-routing'
</script>

<div>
    <Button variant="default">Hello</Button>
    <Button variant="destructive" slot="asdasdsad" />
    <Link to="/jokes">Get some jokes</Link>
</div>
