import React from 'react';

export type NavLinkProps = {
    link: string;
    text: string;
};
function NavLink({ link, text }: NavLinkProps) {
    return (
        <a className="font-Poppins" href={link}>
            {text}
        </a>
    );
}

export default NavLink;
