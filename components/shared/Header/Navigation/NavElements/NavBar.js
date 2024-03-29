import Link from "next/link";
import { HamIcon } from "./HamIcon";
//import { useNavigation } from 'next/router'; zrobić underline pod aktywną stroną

export const NavBar=()=>{
    //const router = useNavigation();
    return(
        <>
            {/* <nav className="container"> */}
            <nav>
                <ul className="nav">
                    <li>
                        {/* <Link href="/" passHref>
                            <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
                        </Link> */}
                        <Link href="/" passHref>Home</Link>
                    </li>
                    <li>
                        {/* <Link href="/blog" passHref>Blog</Link> */}
                        <Link href="#" passHref>Blog</Link>
                    </li>
                    <li>
                        <div className="logo">
                            <Link href="/" passHref>
                                <h1>Universe</h1>
                            </Link>
                        </div>
                    </li>
                    <li>
                        {/* <Link href="/about" passHref>About</Link> */}
                        <Link href="#" passHref>About</Link>
                    </li>
                    <li>
                        {/* <Link href="/contact" passHref>Contact</Link> */}
                        <Link href="#" passHref>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}