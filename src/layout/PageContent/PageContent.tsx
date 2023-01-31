import React from 'react';

type Props = {
    layoutType: LayoutType;
    children: React.ReactNode;
};

const LayoutType = {
    LEFTMAIN: 'leftmain',
    MAINRIGHT: 'mainright',
    LEFTMAINRIGHT: 'leftmainright',
} as const;

type LayoutType = (typeof LayoutType)[keyof typeof LayoutType];

const PageContent = ({ layoutType, children }: Props) => {
    let content;

    if (layoutType === LayoutType.LEFTMAIN) {
        content = (
            <div className="flex w-full gap-x-[35px] px-5">
                <div className="w-full max-w-74">
                    {children && children[0 as keyof typeof children]}
                </div>
                <div className="w-full max-w-26">
                    {children && children[1 as keyof typeof children]}
                </div>
            </div>
        );
    }

    if (layoutType === LayoutType.LEFTMAINRIGHT) {
        content = (
            <div className="flex h-full w-full gap-[20px]">
                <div className="hidden h-full w-full max-w-16 md:block">
                    {children && children[0 as keyof typeof children]}
                </div>
                <div className="w-full max-w-52 pr-[15px] md:max-w-full">
                    {children && children[1 as keyof typeof children]}
                </div>
                <div className="hidden w-full max-w-21 md:block">
                    {children && children[2 as keyof typeof children]}
                </div>
            </div>
        );
    }

    if (layoutType === LayoutType.MAINRIGHT) {
        content = (
            <div className="flex w-full gap-[20px]">
                <div className="w-full max-w-16">
                    {children && children[0 as keyof typeof children]}
                </div>
                <div className="w-full max-w-52">
                    {children && children[1 as keyof typeof children]}
                </div>
            </div>
        );
    }

    return (
        <div className="layout relative flex h-full w-full items-start">
            {content}
        </div>
    );
};

export default PageContent;
