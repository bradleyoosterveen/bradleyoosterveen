<script lang="ts">
    import { type Section } from "$lib/stores/section";
    export let isActive: boolean = false;
    export let section: Section;
</script>

{#if (import.meta.env.PROD && section.showProd) || import.meta.env.DEV}
    <button data-nav-target={section.section} on:click class={`${isActive ? "opacity-100" : "opacity-20"} transition-all flex gap-2 items-center justify-between text-lg uppercase clickable`}>
        <slot/>
        <div class={`${isActive ? "h-5 opacity-100" : "h-0 opacity-0"} transition-all w-1.5 rounded-full bg-green `}></div>
    </button>
{/if}