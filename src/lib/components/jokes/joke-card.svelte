<script lang="ts">
  export let content: {
    first: string
    second?: string
  }
  export let category: string
</script>

<div class="max-w-[398px] rounded-lg border border-border bg-card p-2">
  <div>
    <p class="text-base font-medium">{content.first}</p>
    <p class="text-sm font-medium text-slate-500">{content?.second ?? ''}</p>
  </div>

  <div class="flex items-center justify-end">
    <span class="text-sm font-medium text-slate-400">{category}</span>
  </div>
</div>
