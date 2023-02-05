import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link, LinkProps } from '@builder.io/qwik-city';
import styles from './button.css?inline';

interface ButtonProps {
    text: string;
    variant: 'primary' | 'secondary';
    onClick?: () => void;
}

interface ButtonLinkProps {
    text: string;
    variant: 'primary' | 'secondary';
    href: string;
    target: '_blank' | '_self'
}


export const Button = component$(({ text, variant, ...rest }: ButtonProps | ButtonLinkProps) => {
    useStylesScoped$(styles);

    function getButtonClassname(variant: ButtonProps['variant']): string {
        switch (variant) {
            case 'primary':
                return 'primary';
            case 'secondary':
                return 'secondary';
        }
    }

    if ((rest as LinkProps).href) {
        const { href, target } = (rest as LinkProps);
        return <button class={getButtonClassname(variant)}><Link href={href} target={target} >{text}</Link></button>
    } else {
        return (
            <button class={getButtonClassname(variant)} onClick$={(rest as ButtonProps).onClick}>{text}</button>
        );
    }
});
