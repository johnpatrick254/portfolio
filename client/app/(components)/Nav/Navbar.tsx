import React from 'react'
import Image from "next/image"
import navLogo from "../../(assets)/public/images/logo-2-nav-logo.svg"
import "../../(styles)/nav/nav.style.css"
import NavCTO from './NavCTO'

const Navbar = () => {
    return (
        <nav>

            <div id="nav-logo">
                <Image
                    src={navLogo}
                    alt='nav-logo'
                    quality={100}
                    style={{width:"100%",height:"100%"}}
                />
            </div>
            <NavCTO/>
        </nav>
    )
}

export default Navbar