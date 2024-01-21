<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import Navigation from "$lib/components/Navigation.svelte";
	import { sections } from "$lib/stores/section";
	import { navigationIsOpen } from "$lib/stores/navigation";
</script>

<div class="flex flex-col lg:flex-row gap-2 items-center max-h-screen w-screen">
    <Navigation/>

    <main class={`${$navigationIsOpen ? "opacity-20 scale-95" : "opacity-100"} transition-all w-full max-h-screen overflow-y-hidden bg-primary lg:border-l-[1px] border-accent flex flex-col gap-0 z-0`}>
        {#each sections as section}
            {#if (import.meta.env.PROD && section.showProd) || import.meta.env.DEV}
                <Section section={section}>
                    <svelte:component this={section.component}/>
                </Section>
            {/if}
        {/each}
    </main>
</div>