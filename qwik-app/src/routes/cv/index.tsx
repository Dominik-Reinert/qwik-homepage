import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";
import styles from "./index.css?inline";

export const head: DocumentHead = {
  title: "CV",
};

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <div class="business-card__left">
        <div class="business-card__left__profile-logo">
          <img class="logo" src="/profile-logo.jpg" />
        </div>
        <h1 class="business-card__left__name">Dominik Reinert</h1>
        <span class="business-card__left__separator" />
        <h2 class="business-card__left__position">Senior software engineer</h2>
        <div class="business-card__left__social-buttons">
          <a class="business-card__left__social-button" href="https://www.linkedin.com/in/dominik-reinert/" target="_blank">
            <img alt="LinkedIn" src="/linkedin.png" />
          </a>
          <a class="business-card__left__social-button" href="https://www.instagram.com/domad.28/" target="_blank">
            <img alt="Instagram" src="/instagram.png" />
          </a>
          <a class="business-card__left__social-button" href="https://github.com/Dominik-Reinert/" target="_blank">
            <img alt="Github" src="/github-mark.png" />
          </a>
        </div>
      </div>
      <div class="business-card__right">
        <h1>Hallo</h1>
        <h2>Wer ich bin &amp; was ich mache</h2>
        <p class="navigation-buttons">
          <Button text="Lebenslauf" variant="primary" />
          <Button text="Projekte" variant="secondary" />
        </p>
        <p class="text">
          Ich bin ein Textabschnitt. Klicken Sie hier, um einen Text hinzuzufügen und mich zu bearbeiten. Klicken Sie auf „Text bearbeiten“ oder doppelklicken Sie, um loszulegen.
        </p>
        <p class="text">
          Dies ist der ideale Ort, um einen langen Text über Ihr Unternehmen zu schreiben
        </p>
      </div>
    </>
  );
});
