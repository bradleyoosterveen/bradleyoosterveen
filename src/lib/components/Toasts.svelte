<script lang="ts">
	import { toasts } from "$lib/stores/toasts";
	import Toast from "./Toast.svelte";
</script>

{#if $toasts}
    <div class="absolute bottom-4 left-0 right-0 flex flex-col gap-2 items-center">
        {#each $toasts as toast}
            <Toast {toast}/>
        {/each}
    </div>
{/if}