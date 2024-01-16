<script lang="ts">
    export let href: string = "";
    export let target: string = "_blank";
</script>

<a href={href} target={target} class="underline font-semibold clickable">
    <slot/>
</a>