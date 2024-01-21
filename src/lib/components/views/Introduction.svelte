<script lang="ts">
	import Display from "../typography/Display.svelte";
	import Link from "../typography/Link.svelte";

</script>

<div class="flex flex-col gap-4 justify-center grow">
    <div class="flex flex-col gap-2">
        <span>Hi, my name is</span>
        <div class="flex flex-col gap-2">
            <Display>BRADLEY OOSTERVEEN</Display>
        </div>
    </div>

    <div class="flex flex-col gap-2">
        <span>I’m a student at Windesheim, and I love solving problems using code.</span>
        <div class="flex gap-4">
            <Link href="https://github.com/TheRealHavoc">
                Github
            </Link>
            <Link href="https://www.linkedin.com/in/bradley-oosterveen-b6552a177">
                LinkedIn
            </Link>
        </div>
    </div>
</div>