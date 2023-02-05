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
          <div class="business-card__left__social-buttons">
            <a class="business-card__left__social-button" href="https://www.linkedin.com/in/dominik-reinert/" target="_blank">
              <img alt="LinkedIn" src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6ea5b4a88f0b4f91945b40499aa0af00.png" />
            </a>
            <a class="business-card__left__social-button" href="https://www.instagram.com/domad.28/" target="_blank">
              <img alt="Instagram" src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01c3aff52f2a4dffa526d7a9843d46ea.png" />
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
      </main>
    </div>
  );
});
