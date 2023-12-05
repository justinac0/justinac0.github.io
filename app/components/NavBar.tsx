export default function NavBar() {
    return (
        <nav className="flex justify-center p-4 navbar text-white text-lg">
            <ul className="flex">
                <li className="hover:underline"><a href="/about/"><h4>About</h4></a></li>
                <li className="hover:underline"><a href="/portfolio/"><h4>Portfolio</h4></a></li>
                {/* <li className="hover:underline"><a href="/blogs"><h4>Blogs</h4></a></li> */}
                <li className="hover:underline"><a href="/contact/"><h4>Contact</h4></a></li>
            </ul>
        </nav>
    )
}