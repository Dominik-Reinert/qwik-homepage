import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import styles from "./cv.css?inline";

export const head: DocumentHead = {
  title: "CV",
};

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div>
      <h1>CV</h1>
      <h2>Welcome</h2>
      <p>
        To my personal homepage! This page was build with Qwik, a new frontend
        framework, that will make my homepage crazy fast to load!
      </p>
      <div class="page-divider">
        <div class="page-divider__left">
          <h2>Personal details</h2>
          <p>
            <dl>
              <dt>Name</dt>
              <dd>Dominik Reinert</dd>

              <dt>Address</dt>
              <dd>Am Jungenwäldchen 8, 66663 Merzig</dd>

              <dt>Email</dt>
              <dd>dore250393@gmail.com</dd>
            </dl>
          </p>
        </div>
        <div class="page-divider__right">
          <h2>Work experience</h2>
          <p>
            <dl>
              <dt>Famly</dt>
              <dd>Frontend engineer II</dd>
              <dd>Planning and implementation of features on the Famly platform. Main focus: Staffing and attendance</dd>

              <dt>Address</dt>
              <dd>Am Jungenwäldchen 8, 66663 Merzig</dd>

              <dt>Email</dt>
              <dd>dore250393@gmail.com</dd>
            </dl>
          </p>
        </div>
      </div>
    </div>
  );
});
