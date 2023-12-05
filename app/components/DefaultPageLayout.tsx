import { ReactElement } from "react";

import GoHome from "./GoHome"

interface DefaultPageLayoutParams {
    content: ReactElement<any, any>;
}

export default function DefaultPageLayout({
    content
}: DefaultPageLayoutParams) {
    return (
        <>
            <GoHome />

            <div className="pt-10 mr-12 ml-12">
                {content}
            </div>
        </>

    )
}
