<script lang="ts">
	import Divider from "../Divider.svelte";

    export let size: 1 | 2 | 3 | 4 | 5 | 6 = 1;
</script>

<div class="flex flex-col gap-2 lg:w-fit">
    {#if size === 1}
        <h1 class="text-5xl uppercase font-black">
            <slot/>
        </h1>
    {:else if size === 2}
        <h2 class="text-4xl uppercase font-black">
            <slot/>
        </h2>
    {:else if size === 3}
        <h3 class="text-3xl uppercase font-black">
            <slot/>
        </h3>
    {:else if size === 4}
        <h4 class="text-2xl uppercase font-black">
            <slot/>
        </h4>
    {:else if size === 5}
        <h5 class="text-xl uppercase font-black">
            <slot/>
        </h5>
    {:else if size === 6}
        <h6 class="text-lg uppercase font-black">
            <slot/>
        </h6>
    {/if}
    <Divider/>
</div>