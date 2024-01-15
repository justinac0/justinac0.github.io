import DefaultPageLayout from "~/components/DefaultPageLayout"

export default function About() {
    return (
        <DefaultPageLayout content={
            <>
                <h1 className="text-4xl text-center">About</h1>
                <br />
                <p>
                    Hello, my name is Justin and I{'\’'}m an undergraduate student at <a  className="text-blue-400 underline" href="https://www.qut.edu.au/">QUT</a>.
                </p>
                <br />
                <p>
                    I{'\’'}m studying a double bachelor of Science and Information Technology (majoring in Physics and Computer Science).
                </p>
                <br />
                <p>
                    Always eagar to learn and improve my skills, I like to spend my spare time creating software not always directly related to course content covered. For example, some projects and topics I have delved into are graphics programming, game development, mobile applications, website design and development, simuluation phyiscs, IoT and the list goes on.
                </p>
                <br />
                <p>
                    This website serves as a hub where I will archive interesting projects that I have worked on, write about things I have been learning and be a place where future employers can easily view my work and contact me.
                </p>
                <br />
                <p>
                    If you wish to contact me, feel free to through the contact page.
                </p>
            </>
        } />

    )
}