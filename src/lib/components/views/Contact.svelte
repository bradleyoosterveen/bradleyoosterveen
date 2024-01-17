<script>
	import Heading from "../typography/Heading.svelte";

    import 'iconify-icon';
</script>

<Heading size={2}>Contact</Heading>

<div class="flex flex-col sm:flex-row gap-4 lg:items-center">
    <a href="mailto:bradleyoosterveen@gmail.com" class="clickable inline-block">
        <button class="px-4 py-1 rounded bg-white text-black">Send me an e-mail!</button>
    </a>

    <div class="clickable inline-block">
        <button class="flex items-center aspect-square px-2 py-1 rounded bg-white text-black"><iconify-icon icon="carbon:copy"/></button>
    </div>
</div>