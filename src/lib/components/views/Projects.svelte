<script lang="ts">
	import Project from "../Project.svelte";
import Heading from "../typography/Heading.svelte";
</script>

<div class="flex flex-col py-12 sm:py-6 gap-4 grow">
    <div class="flex flex-col gap-1">
        <Heading size={2}>Projects</Heading>
    </div>

    <div class="flex flex-col gap-8">
        {#each [1,2,3] as project, i}
            <Project alternate={i % 2 === 0}/>
        {/each}
    </div>
</div>