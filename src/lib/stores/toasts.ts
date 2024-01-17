import { writable } from "svelte/store";

export type Toast = {
    id?: number;
    text: string;
    timeout?: number;
    type?: "success" | "error" | "warning";
};

export const toasts = writable<Toast[]>([]);

export const addToast = (toast: Toast) => {
    const id = Math.floor(Math.random() * Date.now());
    toast.id = id;

    if (!toast.type) toast.type = "success";
    if (!toast.timeout) toast.timeout = 5000;

    toasts.update((t) => [...t, { ...toast, id }]);

    if (toast.timeout)
        setTimeout(() => removeToast(toast), toast.timeout);
}

export const removeToast = (toast: Toast) => {
    toasts.update((t) => t.filter((t) => t.id !== toast.id));
}