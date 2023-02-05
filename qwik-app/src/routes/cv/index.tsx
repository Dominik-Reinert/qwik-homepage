import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

export const head: DocumentHead = {
  title: "CV",
};

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="page-wrapper">
        <div class="background">
            <div class="background__left" />
            <div class="background__right" />
        </div>
        <main>
            <div class="business-card__left">
                <div class="business-card__left__profile-logo">
                    <img class="logo" src="/profile-logo.jpg" />
                </div>
                <h1 class="business-card__left__name">Dominik Reinert</h1>
                <span class="business-card__left__separator" />
                <h2 class="business-card__left__position">Senior software engineer</h2>
                <div class="business-card__left__social-buttons"> linked in github</div>
            </div>
            <div class="business-card__right">Hallo</div>
        </main>
    </div>
  );
});
