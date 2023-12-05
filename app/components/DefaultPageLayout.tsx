import { ReactElement } from "react";

import GoHome from "./GoHome"

interface DefaultPageLayoutParams {
    title: string;
    description?: string;
    content: ReactElement<any, any>;
}

export default function DefaultPageLayout({
    title, description, content
}: DefaultPageLayoutParams) {
    return (
        <>
            <head>
                <title>{title}</title>
                <meta aria-description={description} content='' />
            </head>

            <GoHome />

            <div className="pt-10 mr-12 ml-12">
                {content}
            </div>
        </>

    )
}
