import React from 'react'
import Image from 'next/image'

export default function SkillCard({ name, img }: { name: string, img: string }) {
    return (
        <div className='skill-card'>
            <Image
                src={img}
                alt={name + "img"}
                style={{ width: "100%", height: "80%" }}
            />
            <p>{name}</p>
        </div>
    )
}
