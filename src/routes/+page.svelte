<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import Navigation from "$lib/components/Navigation.svelte";
	import { sections } from "$lib/stores/section";
</script>

<div class="flex flex-col lg:flex-row gap-2 items-center max-h-screen w-screen">
    <Navigation/>

    <main class="w-full max-h-screen overflow-y-auto bg-primary px-8 lg:border-l-[1px] border-accent">
        {#each sections as section}
            {#if (import.meta.env.PROD && section.showProd) || import.meta.env.DEV}
                <Section id={section.section}>
                    <svelte:component this={section.component}/>
                </Section>
            {/if}
        {/each}
    </main>
</div>