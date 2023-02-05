import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link, LinkProps } from '@builder.io/qwik-city';
import { JSX } from '@builder.io/qwik/jsx-runtime';
import styles from './button.css?inline';

interface ButtonProps {
    text: string;
    variant: 'primary' | 'secondary' | 'unstyled';
    icon?: 'link';
    onClick?: () => void;
}

interface ButtonLinkProps {
    text: string;
    variant: 'primary' | 'secondary' | 'unstyled';
    href: string;
    target: '_blank' | '_self'
    icon?: 'link';
}


export const Button = component$(({ text, variant, icon, ...rest }: ButtonProps | ButtonLinkProps) => {
    useStylesScoped$(styles);

    function getButtonClassname(variant: ButtonProps['variant']): string {
        switch (variant) {
            case 'primary':
                return 'primary';
            case 'secondary':
                return 'secondary';
            case 'unstyled':
                return 'unstyled';
        }
    }

    function getIcon(icon: ButtonProps['icon']): string | undefined {
        switch (icon) {
            case 'link':
                return '/link-icon.png';
            case undefined: return undefined
        }
    }

    function getIconComponent(icon: ButtonProps['icon']): JSX.Element | null {
        return icon ? <img src={getIcon(icon)} width="15px" height="15px" /> : null
    }

    if ((rest as LinkProps).href) {
        const { href, target } = (rest as LinkProps);
        return <button class={getButtonClassname(variant)}><Link href={href} target={target}>{text}{getIconComponent(icon)}</Link></button>
    } else {
        return (
            <button class={getButtonClassname(variant)} onClick$={(rest as ButtonProps).onClick}>{text}{getIconComponent(icon)}</button>
        );
    }
});
