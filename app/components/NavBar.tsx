export default function NavBar() {
    return (
        <nav className="flex justify-center p-4 navbar text-white text-lg">
            <ul className="flex">
                <li className="hover:underline"><a href="/about/"><h4 className="text-3xl">About</h4></a></li>
                <li className="hover:underline"><a href="/portfolio/"><h4 className="text-3xl">Portfolio</h4></a></li>
                <li className="hover:underline"><a href="/contact/"><h4 className="text-3xl">Contact</h4></a></li>
            </ul>
        </nav>
    )
}