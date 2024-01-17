<script lang="ts">
	import { activeSection } from "$lib/stores/section";

    export let id: string;

    const handleScroll = (node: any) => {
        function callback(entries: any[]) {
            const entry = entries.find(entry => entry.isIntersecting);

            if (entry) {
                activeSection.set(entry.target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 0.6,
        });

        observer.observe(node);

        return { destroy: () => observer.disconnect() };
    }
</script>

<section id={id} use:handleScroll class="w-full min-h-screen flex flex-col gap-4 justify-center">
    <slot/>
</section>