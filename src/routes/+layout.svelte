<script lang="ts">
    import Toasts from '$lib/components/Toasts.svelte';
    import '../app.css';
</script>

<Toasts/>

<div class="bg-secondary text-white min-w-screen min-h-screen flex overflow-hidden">
    <slot/>
</div>