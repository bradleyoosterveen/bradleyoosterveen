<script lang="ts">
    import Toasts from '$lib/components/Toasts.svelte';
    import '../app.css';

    export const prerender = true;
</script>

<Toasts/>

<div class="bg-stone-950 text-white min-w-screen min-h-screen flex overflow-hidden">
    <slot/>
</div>