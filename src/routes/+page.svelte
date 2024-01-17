<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import Introduction from "$lib/components/views/Introduction.svelte";
	import Experience from "$lib/components/views/Experience.svelte";
	import Navigation from "$lib/components/Navigation.svelte";
</script>

<div class="flex p-4 gap-8 justify-center items-center max-h-screen w-screen">
    <!-- Sidebar -->
    <Navigation/>

    <!-- Main -->
    <main class="w-[960px] max-h-screen overflow-y-auto">
        <!-- Introduction -->
        <Section id="introduction">
            <Introduction/>
        </Section>

        <!-- Experience -->
        <Section id="experience">
            <Experience/>
        </Section>
    </main>
</div>