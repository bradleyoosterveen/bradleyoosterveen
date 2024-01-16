<script lang="ts">
    export let size: 1 | 2 | 3 | 4 | 5 | 6 = 1;
</script>

{#if size === 1}
    <h1 class="text-5xl uppercase font-bold">
        <slot/>
    </h1>
{:else if size === 2}
    <h2 class="text-4xl uppercase font-bold">
        <slot/>
    </h2>
{:else if size === 3}
    <h3 class="text-3xl uppercase font-bold">
        <slot/>
    </h3>
{:else if size === 4}
    <h4 class="text-2xl uppercase font-bold">
        <slot/>
    </h4>
{:else if size === 5}
    <h5 class="text-xl uppercase font-bold">
        <slot/>
    </h5>
{:else if size === 6}
    <h6 class="text-lg uppercase font-bold">
        <slot/>
    </h6>
{/if}