/// <reference types="@sveltejs/kit" />

declare namespace svelte.JSX {
    interface DOMAttributes<T> {
        onclick_outside?: CompositionEventHandler<T>;
    }
}