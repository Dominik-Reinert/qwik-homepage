import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
        <img class="logo" src="/profile-logo.jpg" />
      <ul>
        <li>
          <a href="https://github.com/Dominik-Reinert" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dominik-reinert/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/" target="_blank">
            Qwik framework
          </a>
        </li>
      </ul>
    </header>
  );
});
