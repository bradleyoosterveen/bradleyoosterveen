<script lang="ts">
	import Section from "$lib/components/Section.svelte";
	import Introduction from "$lib/components/views/Introduction.svelte";
	import Experience from "$lib/components/views/Experience.svelte";
	import Navigation from "$lib/components/Navigation.svelte";
	import Projects from "$lib/components/views/Projects.svelte";
	import { SectionEnum } from "$lib/stores/section";
	import Contact from "$lib/components/views/Contact.svelte";
</script>

<div class="flex p-4 gap-8 justify-center items-center max-h-screen w-screen">
    <Navigation/>

    <main class="w-[960px] max-h-screen overflow-y-auto">
        <Section id={SectionEnum.Introduction}>
            <Introduction/>
        </Section>

        <Section id={SectionEnum.Experience}>
            <Experience/>
        </Section>

        <Section id={SectionEnum.Projects}>
            <Projects/>
        </Section>

        <Section id={SectionEnum.Contact}>
            <Contact/>
        </Section>
    </main>
</div>