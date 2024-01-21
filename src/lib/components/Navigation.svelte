<script lang="ts">
	import { SectionEnum, activeSection } from "$lib/stores/section";
	import NavigationItem from "./NavigationItem.svelte";

    let activeSectionValue: SectionEnum = SectionEnum.Introduction;

    activeSection.subscribe((value) => {
        activeSectionValue = value;
    });

    const onNavClick = (e: MouseEvent) => {
        const element = e.target as HTMLElement;
        const target = document.querySelector(`#${element.dataset.navTarget}`) as HTMLElement;

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
    <NavigationItem on:click={onNavClick} navTarget="introduction" isActive={activeSectionValue === SectionEnum.Introduction}>Introduction</NavigationItem>
    {#if import.meta.env.DEV}
        <NavigationItem on:click={onNavClick} navTarget="experience" isActive={activeSectionValue === SectionEnum.Experience}>Experience</NavigationItem>
        <NavigationItem on:click={onNavClick} navTarget="projects" isActive={activeSectionValue === SectionEnum.Projects}>Projects</NavigationItem>
    {/if}
    <NavigationItem on:click={onNavClick} navTarget="contact" isActive={activeSectionValue === SectionEnum.Contact}>Contact</NavigationItem>
</div>