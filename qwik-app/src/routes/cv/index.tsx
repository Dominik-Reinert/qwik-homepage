import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

export const head: DocumentHead = {
    title: "CV",
};

export default component$(() => {
    useStylesScoped$(styles);
    return (
        <>
            hello card
        </>
    );
});
