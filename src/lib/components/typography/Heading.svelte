<script lang="ts">
    export let cssClass: string = "";
    export let size: 1 | 2 | 3 | 4 | 5 | 6 = 1;
</script>

{#if size === 1}
    <h1 class={`${cssClass != "" ? `${cssClass} ` : ""}text-5xl font-black`}>
        <slot/>
    </h1>
{:else if size === 2}
    <h2 class={`${cssClass != "" ? `${cssClass} ` : ""}text-4xl font-black`}>
        <slot/>
    </h2>
{:else if size === 3}
    <h3 class={`${cssClass != "" ? `${cssClass} ` : ""}text-3xl font-black`}>
        <slot/>
    </h3>
{:else if size === 4}
    <h4 class={`${cssClass != "" ? `${cssClass} ` : ""}text-2xl font-black`}>
        <slot/>
    </h4>
{:else if size === 5}
    <h5 class={`${cssClass != "" ? `${cssClass} ` : ""}text-xl font-black`}>
        <slot/>
    </h5>
{:else if size === 6}
    <h6 class={`${cssClass != "" ? `${cssClass} ` : ""}text-lg font-black`}>
        <slot/>
    </h6>
{/if}