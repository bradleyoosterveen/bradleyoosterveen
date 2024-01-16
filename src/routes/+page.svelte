<script lang="ts">
    import Display from "$lib/components/typography/Display.svelte";
    import Divider from "$lib/components/Divider.svelte";

	import Link from "$lib/components/typography/Link.svelte";

    import { goto } from "$app/navigation";
	import NavigationItem from "$lib/components/NavigationItem.svelte";

    let activeSection: "introduction" | "experience" | "projects" | "contact" = "introduction";

    const onNavClick = (e: MouseEvent) => {
        const element = e.target as HTMLElement;
        const target = document.querySelector(`#${element.dataset.navTarget}`) as HTMLElement;

        if (target === null)
            return;

        const main = document.querySelector("main") as HTMLElement;

        const options: ScrollToOptions = {
            behavior: "smooth",
            top: target.offsetTop,
            left: 0,
        };

        main.scrollTo(options);
    }

    const handleScroll = (node: any) => {
        function callback(entries: any[]) {
            const entry = entries.find(entry => entry.isIntersecting);

            if (entry) {
                activeSection = entry.target.id;
            }
        };

        const observer = new IntersectionObserver(callback, {
            threshold: 0.6,
        });

        observer.observe(node);

        return { destroy: () => observer.disconnect() };
    }

</script>

<div class="flex p-4 gap-8 justify-center items-center max-h-screen w-screen">
    <!-- Sidebar -->
    <div class="flex flex-col gap-4 w-64">
        <NavigationItem on:click={onNavClick} navTarget="introduction" isActive={activeSection === "introduction"}>Introduction</NavigationItem>
        <NavigationItem on:click={onNavClick} navTarget="experience" isActive={activeSection === "experience"}>Experience</NavigationItem>
        <NavigationItem on:click={onNavClick} navTarget="projects" isActive={activeSection === "projects"}>Projects</NavigationItem>
        <NavigationItem on:click={onNavClick} navTarget="contact" isActive={activeSection === "contact"}>Contact</NavigationItem>
    </div>

    <!-- Main -->
    <main class="w-[960px] max-h-screen overflow-y-auto">
        <!-- Introduction -->
        <section id="introduction" use:handleScroll class="w-full min-h-screen flex flex-col gap-4 justify-center">
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
        </section>

        <!-- Experience -->
        <section id="experience" use:handleScroll class="w-full min-h-screen flex flex-col gap-4 justify-center">
            <span>I have experience with a lot of things.</span>
        </section>
    </main>
</div>