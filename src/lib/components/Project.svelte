<script lang="ts">
    import image from "$lib/assets/images/Visualisatie.png";
	import Heading from "./typography/Heading.svelte";
    
    export let alternate: boolean = false;
</script>

<div class={`${alternate ? "sm:flex-row-reverse" : "sm:flex-row "} bg-white/5 flex-col rounded-2xl flex gap-4 items-stretch`}>
    <div class="w-full sm:w-1/2 xl:w-2/3 p-4">
        <Heading size={3}>Carbon Case Estimator 2.0</Heading>
    </div>
    <img src={image} class="object-cover bg-white/5 rounded-2xl lg:aspect-square w-full sm:w-1/2 xl:w-1/3 h-96" />
</div>