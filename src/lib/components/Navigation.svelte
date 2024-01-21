<script lang="ts">
	import { SectionEnum, activeSection, sections, type Section } from "$lib/stores/section";
	import NavigationItem from "./NavigationItem.svelte";

    let activeSectionValue = sections.find(x => x.section === SectionEnum.Introduction);

    activeSection.subscribe((value) => {
        activeSectionValue = value;
    });

    const onNavClick = (s: Section) => {
        const target = document.getElementById(s.section);

        if (target === null)
            return;

        const main = document.querySelector("main") as HTMLElement;

        const options: ScrollToOptions = {
            behavior: "smooth",
            top: target.offsetTop,
            left: 0,
        };

        main.scrollTo(options);
    }
</script>

<div class="bg-stone-950 lg:relative absolute top-0 left-0 right-0 px-8 py-4 flex lg:flex-col gap-4 lg:w-64 flex-wrap shadow-stone-950 shadow-lg">
    {#each sections as section}
        {#if import.meta.env.DEV}
            <NavigationItem on:click={() => onNavClick(section)} navTarget={section.section} isActive={activeSectionValue === section}>{section.section}</NavigationItem>
        {/if}
    {/each}
</div>