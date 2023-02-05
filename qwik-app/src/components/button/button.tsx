import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './button.css?inline';

interface ButtonProps {
    text: string;
    variant: 'primary' | 'secondary';
    onClick?: () => void;
}


export const Button = component$(({ text, variant, onClick }: ButtonProps) => {
    useStylesScoped$(styles);

    function getButtonClassname(variant: ButtonProps['variant']): string {
        switch (variant) {
            case 'primary':
                return 'primary';
            case 'secondary':
                return 'secondary';
        }
    }

    return (
        <button class={getButtonClassname(variant)} onClick$={onClick}>{text}</button>
    );
});
