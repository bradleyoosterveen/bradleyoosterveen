<script lang="ts">
    export let isActive: boolean = false;
    export let navTarget: string = "";
</script>

<button data-nav-target={navTarget} on:click class={
    isActive ? 
        "transition-all flex gap-2 items-center text-lg uppercase" : 
        "group transition-all flex gap-2 items-center text-lg uppercase clickable opacity-20 "
}>
    <div class={isActive ? "transition-all w-1.5 h-5 rounded-full bg-white" : "transition-all w-1.5 h-0 rounded-full bg-white opacity-0 group-hover:opacity-50"}></div>
    <slot/>
</button>