<script lang="ts">
    let value: string = ''
</script>

<input type="text" bind:value placeholder="Type your name" />

{#if value}
    <p>Hello, {value}!</p>
{/if}
