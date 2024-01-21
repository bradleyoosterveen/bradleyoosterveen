<script lang="ts">
	import { addToast } from "$lib/stores/toasts";
    import 'iconify-icon';
	import Heading from "../typography/Heading.svelte";

    const copyEmail = async () => {
        await navigator.clipboard.writeText("bradleyoosterveen@gmail.com").then(() => {
            addToast({text: "Copied e-mail address to clipboard.", type: "success"});
        });
    }
</script>

<div class="flex flex-col gap-4 justify-center grow">
    <div class="flex flex-col gap-1">
        <Heading size={2}>Contact</Heading>
        <span class="font-medium">bradleyoosterveen@gmail.com</span>
    </div>

    <span>If you're in need of a skilled software developer, feel free to reach out via email – let's discuss how I can contribute to your project's success.</span>

    <div class="flex flex-col lg:flex-row gap-4 lg:items-center items-start">
        <a href="mailto:bradleyoosterveen@gmail.com" class="clickable inline-block">
            <button class="px-4 py-1 rounded bg-green text-black">Send me an e-mail!</button>
        </a>

        <button on:click={copyEmail} class="clickable flex gap-2 items-center">
            <span>Copy my e-mail address</span>
            <iconify-icon icon="tabler:copy"/>
        </button>
    </div>
</div>