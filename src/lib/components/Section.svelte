<script lang="ts">
	import { SectionEnum, activeSection, sections } from "$lib/stores/section";

    export let id: SectionEnum;

    const handleScroll = (node: any) => {
        function callback(entries: any[]) {
            const entry = entries.find(entry => entry.isIntersecting);

            const section = sections.find(x => x.section === id);

            if (entry && section) {
                activeSection.set(section);
            }
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 0.6,
        });

        observer.observe(node);

        return { destroy: () => observer.disconnect() };
    }
</script>

<section id={id} use:handleScroll class="min-h-dvh flex flex-col gap-4 justify-center">
    <slot/>
</section>