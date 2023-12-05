import DefaultPageLayout from "~/components/DefaultPageLayout"

export default function Contact() {
    return (
        <DefaultPageLayout title="Justin Chappell - Contact" content={
            <>
                <h1 className="text-3xl">Contact</h1>
                <br />
                <p><b>email:</b></p>
                <p className="text-blue-300">contact.justinac@gmail.com</p>
                <br />
                <p><b>resume:</b></p>
                <p className="text-red-400">on request (use email)</p>
            </>
        } />
    )
}