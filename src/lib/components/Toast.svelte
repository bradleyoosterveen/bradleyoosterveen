<script lang="ts">

	import { removeToast, type Toast } from "$lib/stores/toasts";

    /**
	 * @type {{ text: any; id: any; timeout?: number | undefined; type?: "error" | "success" | "warning" | undefined; }}
	 */
     export let toast: Toast;
</script>

<div class="relative py-2 px-6 bg-stone-50/10 rounded-full flex gap-2 items-center text-white">
    <span>{toast.text}</span>
    {#if toast.id !== undefined}
        <button class="flex items-center clickable" on:click={() => removeToast(toast)}><iconify-icon icon="carbon:close"/></button>
    {/if}
</div>