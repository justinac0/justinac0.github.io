interface GithubButtonParams {
    link?: string
}

export default function GithubButton({
    link
}: GithubButtonParams) {
    return (
        <>
            {link ? <>
                <button>Button</button>
                <p>{link}</p>
            </> : <></>}
        </>
    )
}