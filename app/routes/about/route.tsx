import DefaultPageLayout from "~/components/DefaultPageLayout"

export default function About() {
    return (
        <DefaultPageLayout content={
            <>
                <h1 className="text-3xl">About</h1>
                <p>Hello! my name is Justin and I am currently an undergraduate student at QUT, undertaking a double bachelor of Science and IT {"("}majoring in physics and computer science respectively{")"}.</p>
                <br />
                <p>Always eagar to improve I spend my spare time creating software not always directly related to course content covered. Some of the projects I have worked on over the years
                    covering topics such as graphics programming, game development, mobile application, website design and development, simuluation phyiscs, IoT and the list goes on.</p>
                <br />
                <p>This website serves as a hub where I will archive interesting projects I have made, write about things I have been learning (mainly for me to come back to) and be a place where future employers can easily view my work and contact me.</p>
                <br />
                <p>If you wish to contact me, feel free to through the contact page.</p>
            </>
        } />

    )
}