<script lang="ts">
    import Toasts from '$lib/components/Toasts.svelte';
	import { addToast, toasts } from '$lib/stores/toasts';
    import '../app.css';
</script>

<Toasts/>

<div class="bg-stone-950 text-white min-w-screen min-h-screen flex overflow-hidden">
    <slot/>
</div>