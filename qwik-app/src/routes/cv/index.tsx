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
                        <dt>Senior frontend engineer (Jan. 2023 - Today)</dt>
                        <dd>Planning and implementation of architectural features and enhancements to the frontend.</dd>

                        <dt>Frontend engineer II (Jan. 2022 - Jan. 2023)</dt>
                        <dd>Planning and implementation of features on the Famly platform. Main focus: Staffing and attendance.</dd>
                    </dl>
                </dd>
                <dt><Button text="Talkwalker" variant="unstyled" href="https://www.talkwalker.com/de" target="_blank" icon="link" /></dt>
                <dd>Social media analtytics
                    <dl>
                        <dt>Feature team coordinator (July 2019 - Jan. 2022)</dt>
                        <dd>Workload balancing, reporting and management of a team of five developers.</dd>

                        <dt>Software engineer (Dec. 2017 - Jan. 2022)</dt>
                        <dd>Technical design and implementation of high availability services.</dd>
                    </dl>
                </dd>
                <dt><Button text="Felten group" variant="unstyled" href="https://www.felten-group.com/de/" target="_blank" icon="link" /></dt>
                <dd>Manufacturing execution system
                    <dl>
                        <dt>Professional services (Apr. 2017 - Nov. 2017)</dt>
                        <dd>Development of customer specific requirements.</dd>

                        <dt>Junior Java software developer (Okt. 2015 - Apr. 2017)</dt>
                        <dd>Design and Implementation of a mobile task management application for use in tandem with industrial software.</dd>
                    </dl>
                </dd>
            </dl>
        </div>
    );
});
