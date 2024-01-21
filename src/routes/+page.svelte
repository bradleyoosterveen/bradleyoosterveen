<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import Navigation from "$lib/components/Navigation.svelte";
	import { sections } from "$lib/stores/section";
</script>

<div class="flex flex-col lg:flex-row lg:px-8 gap-8 justify-center items-center max-h-screen w-screen">
    <Navigation/>

    <main class="lg:w-[980px] max-h-screen overflow-y-auto bg-primary px-8 lg:border-x-[1px] border-accent">
        {#each sections as section}
            <Section id={section.section}>
                <svelte:component this={section.component}/>
            </Section>
        {/each}
    </main>
</div>