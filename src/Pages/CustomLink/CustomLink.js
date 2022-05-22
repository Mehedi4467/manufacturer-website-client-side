import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link

                className={`${match ? 'text-orange-500' : 'text-black'}`}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
};

export default CustomLink;