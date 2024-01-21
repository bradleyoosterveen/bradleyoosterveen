import Contact from "$lib/components/views/Contact.svelte";
import Experience from "$lib/components/views/Experience.svelte";
import Introduction from "$lib/components/views/Introduction.svelte";
import Projects from "$lib/components/views/Projects.svelte";
import type { ComponentType } from "svelte";
import { writable } from "svelte/store";

export enum SectionEnum {
    Introduction = "introduction",
    Experience = "experience",
    Projects = "projects",
    Contact = "contact",
}

export type Section = {
    section: SectionEnum;
    component: ComponentType;
    showProd: boolean;
}

export const sections: Section[] = [
    {
        section: SectionEnum.Introduction,
        component: Introduction,
        showProd: true,
    },
    {
        section: SectionEnum.Experience,
        component: Experience,
        showProd: false,
    },
    {
        section: SectionEnum.Projects,
        component: Projects,
        showProd: false,
    },
    {
        section: SectionEnum.Contact,
        component: Contact,
        showProd: true,
    },
];

export const activeSection = writable<Section>();