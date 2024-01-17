import { writable } from "svelte/store";

enum SectionEnum {
    Introduction = "introduction",
    Experience = "experience",
    Projects = "projects",
    Contact = "contact",
}

const activeSection = writable<SectionEnum>();

export { SectionEnum, activeSection };