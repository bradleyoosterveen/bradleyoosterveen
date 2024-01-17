<script lang="ts">
	import Divider from "../Divider.svelte";
	import Display from "../typography/Display.svelte";
	import Link from "../typography/Link.svelte";

</script>
<div>
    <span>Hi, my name is</span>
    <div class="flex gap-4 justify-between items-center">
        <Display>BRADLEY OOSTERVEEN</Display>
        <Display size={4}>Angular • .NET • Svelte</Display>
    </div>
</div>
<Divider/>
<div class="flex gap-4 justify-between items-center">
    <div class="flex gap-2">
        <Link href="https://github.com/TheRealHavoc">
            Github
        </Link>
        <Link href="https://www.linkedin.com/in/bradley-oosterveen-b6552a177">
            LinkedIn
        </Link>
    </div>
    <span>
        457 contributions in the past year on GitHub
    </span>
</div>