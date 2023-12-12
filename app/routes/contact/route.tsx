import DefaultPageLayout from "~/components/DefaultPageLayout"

export default function Contact() {
    return (
        <DefaultPageLayout content={
            <>
                <h1 className="text-4xl text-center">Contact</h1>
                <br />
                <p><b>email:</b></p>
                <p className="text-blue-300">contact(dot)justinac(at)gmail(dot)com</p>
                <br />
                <p><b>resume:</b></p>
                <p className="text-red-400">on request (use email)</p>
            </>
        } />
    )
}