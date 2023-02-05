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
        <div class="page-divider">
            <h2>Work experience</h2>
            <dl>
                <dt><Button text="Famly" variant="unstyled" href="https://www.famly.co/de" target="_blank" icon="link" /></dt>
                <dd>Early years education
                    <dl>
                        <dt>Senior frontend engineer</dt>
                        <dd>Planning and implementation of architectural features and enhancements to the frontend.</dd>

                        <dt>Frontend engineer II</dt>
                        <dd>Planning and implementation of features on the Famly platform. Main focus: Staffing and attendance.</dd>
                    </dl>
                </dd>
                <dt><Button text="Talkwalker" variant="unstyled" href="https://www.talkwalker.com/de" target="_blank" icon="link" /></dt>
                <dd>Social media analtytics
                    <dl>
                        <dt>Feature team coordinator</dt>
                        <dd>Workload balancing, reporting and management of a team of five developers.</dd>

                        <dt>Software engineer</dt>
                        <dd>Technical design and implementation of high availability services.</dd>
                    </dl>
                </dd>
            </dl>
        </div>
    );
});
