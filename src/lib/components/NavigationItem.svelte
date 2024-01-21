<script lang="ts">
    export let isActive: boolean = false;
    export let navTarget: string = "";
</script>

<button data-nav-target={navTarget} on:click class={`${isActive ? "opacity-100" : "opacity-20"} transition-all flex gap-2 items-center justify-between text-lg uppercase clickable`}>
    <slot/>
    <div class={`${isActive ? "h-5 opacity-100" : "h-0 opacity-0"} transition-all w-1.5 rounded-full bg-white `}></div>
</button>