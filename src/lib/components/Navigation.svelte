<script lang="ts">
	import { SectionEnum, activeSection, sections, type Section } from "$lib/stores/section";
	import { writable } from "svelte/store";
	import NavigationItem from "./NavigationItem.svelte";
	import { navigationIsOpen } from "$lib/stores/navigation";

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

        navigationIsOpen.set(false);

        main.scrollTo(options);
    }
</script>

<div class={`${$navigationIsOpen ? "gap-4" : "gap-0"} transition-all flex flex-col bg-secondary lg:relative absolute top-0 left-0 right-0 px-4 py-4 lg:py-0 lg:px-8 lg:w-64 border-b-[1px] lg:border-b-0 border-accent z-50`}>
    <button class="lg:hidden text-2xl flex items-center" on:click={() => navigationIsOpen.update((x) => !x)}>
        <iconify-icon icon="tabler:menu-2"/>
    </button>
    <div class={`${$navigationIsOpen ? "opacity-100 max-h-dvh" : "opacity-0 max-h-0 lg:max-h-dvh lg:opacity-100"} transition-all flex flex-col gap-4 overflow-hidden`}>
        {#each sections as section}
            <NavigationItem on:click={() => onNavClick(section)} section={section} isActive={activeSectionValue === section}>{section.section}</NavigationItem>
        {/each}
    </div>
</div>