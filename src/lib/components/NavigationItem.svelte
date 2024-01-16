<script lang="ts">
    export let isActive: boolean = false;
    export let navTarget: string = "";
</script>

<button data-nav-target={navTarget} on:click class={
    isActive ? 
        "group transition-all flex gap-2 items-center text-xl uppercase clickable" : 
        "group transition-all flex gap-2 items-center text-xl uppercase clickable opacity-50 "
}>
    <div class={isActive ? "transition-all w-1.5 h-5 bg-white" : "transition-all w-1.5 h-5 bg-white opacity-0 group-hover:opacity-50"}></div>
    <slot/>
</button>