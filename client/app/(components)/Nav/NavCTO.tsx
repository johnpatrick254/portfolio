"use client"
import React, { useState } from 'react'
import Link from 'next/link'


export default function NavCTO() {
    const [showNavMenu, setShowMenu] = useState<boolean>(false)
    return (
        <div className='nav-cto'>
            {
                showNavMenu && <div className='nav-links'>
                    <Link onClick={() => { setShowMenu(!showNavMenu) }} href={'/about'}>About</Link>
                    <Link onClick={() => { setShowMenu(!showNavMenu) }} href={'/skills'}>Skills</Link>
                    <Link onClick={() => { setShowMenu(!showNavMenu) }} href={'/projects'}>Projects</Link>
                    <Link onClick={() => { setShowMenu(!showNavMenu) }} href={'/projects'}>CONTACT ME</Link>
                </div>
            }
            <div
                className={`hamburger ${showNavMenu ? "active-hamburger" : ""}`}
                onClick={() => { setShowMenu(!showNavMenu) }}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
