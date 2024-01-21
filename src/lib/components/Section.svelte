<script lang="ts">
	import { activeSection, sections, type Section } from "$lib/stores/section";
	import { writable } from "svelte/store";

    export let section: Section;

    const handleScroll = (node: any) => {
        function callback(entries: any[]) {
            if (!section) return;

            if (!entries[0].isIntersecting)
                return;

            const s: Section | undefined = sections.find(x => x.section === section.section);

            if (s) {
                activeSection.set(section);
            }
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 0.1,
        });

        observer.observe(node);

        return { destroy: () => observer.disconnect() };
    }
</script>

<section id={section.section} use:handleScroll class={`px-4 sm:px-8 py-4 min-h-dvh flex flex-col overflow-y-auto`}>
    <slot/>
</section>