import React, { PropsWithChildren } from 'react';

interface ContainerComponent extends PropsWithChildren {
    appendClasses?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export function Container({ children, appendClasses = '', onClick = () => { return; }}: ContainerComponent) {
    const className = `p-4
        border
        rounded-md
        h-34
        flex-1
        flex
        justify-center
        bg-gray-100
        hover:bg-gray-200
        group
        transition-all
        delay-100
        ease-in
        hover:cursor-pointer ${appendClasses}`;
    return (
        <div className={className} onClick={(event) => onClick(event)}>
            {children}
        </div>
    );
}
