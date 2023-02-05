import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import styles from "./layout.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
        <div class="page-wrapper">
            <div class="background">
                <div class="background__left" />
                <div class="background__right" />
            </div>
            <main>
                <Slot />
            </main>
        </div>
    );
});
