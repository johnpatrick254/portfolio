import React from 'react'
import SkillCard from '../skills/skillcard'
import reactIMG from "../../(assets)/public/images/react.svg"
import cssIMG from "../../(assets)/public/images/css3.svg"
import phpIMG from "../../(assets)/public/images/php-svgrepo-com.svg"
import postgresIMG from "../../(assets)/public/images/postgresql-logo-svgrepo-com (1).svg"
import vercelImg from "../../(assets)/public/images/vercel-fill-svgrepo-com.svg"
import nodeIMG from "../../(assets)/public/images/node.svg"
import sassIMG from "../../(assets)/public/images/sass.svg"
import mysqlIMG from "../../(assets)/public/images/mysql4.svg"
import Link from 'next/link';
import Image from 'next/image'
import dashboardIMG from "../../(assets)/public/images/Screenshot 2023-10-04 130237.png"
import foodIMG from "../../(assets)/public/images/Screenshot 2023-10-04 122852.png"
import taskIMG from "../../(assets)/public/images/Screenshot 2023-10-04 130456.png"
import "../../(styles)/portofilio/portfolio.style.css"
import typescriptIMG from "../../(assets)/public/images/typescript-svgrepo-com.svg"

export default function Portofolio() {
    return (
        <section id='portfolio' className='main'>
            <div className="portfolio-header">
                PORTFOLIO
            </div>
            <div className="projects">
            <div className="project">
                    <h2>E-Commerce Dashboard</h2>
                    <div className="project-image">
                        <Image
                            src={dashboardIMG}
                            alt={"dashboard img"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="project-stack">
                        <SkillCard
                            key={1}
                            img={reactIMG}
                            name='REACT'
                        />
                        <SkillCard
                            key={2}
                            img={cssIMG}
                            name='CSS3'
                        />
                        <SkillCard
                            key={5}
                            img={vercelImg}
                            name='Vercel'
                        />
                        <SkillCard
                            key={5}
                            img={nodeIMG}
                            name='Node'
                        />
                        <SkillCard
                            key={5}
                            img={sassIMG}
                            name='SASS'
                        />
                        <SkillCard
                            key={5}
                            img={typescriptIMG}
                            name='TypeScript'
                        />
                        <SkillCard
                            key={5}
                            img={mysqlIMG}
                            name='mySQL'
                        />

                    </div>
                    <div className="project-links">
                        <Link href="https://github.com/johnpatrick254/E-Commerce-Dashboard" target='_blank'>CODE</Link>
                    </div>
                </div>
                <div className="project">
                    <h2>Food Delivery Finder</h2>
                    <div className="project-image">
                        <Image
                            src={foodIMG}
                            alt={"project img"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="project-stack">
                        <SkillCard
                            key={1}
                            img={reactIMG}
                            name='REACT'
                        />
                        <SkillCard
                            key={2}
                            img={cssIMG}
                            name='CSS3'
                        />
                        <SkillCard
                            key={5}
                            img={vercelImg}
                            name='Vercel'
                        />
                    </div>
                    <div className="project-links">
                        <Link href="https://light-hall-food-truck-locating-service.vercel.app/" target='_blank'>DEMO</Link>
                        <Link href="https://github.com/johnpatrick254/LightHall-Food-Truck-Locating-Service" target='_blank'>CODE</Link>
                    </div>
                </div>
                <div className="project">
                    <h2>Task Manager</h2>
                    <div className="project-image">
                        <Image
                            src={taskIMG}
                            alt={"project img"}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="project-stack">
                        <SkillCard
                            key={1}
                            img={reactIMG}
                            name='REACT'
                        />
                        <SkillCard
                            key={2}
                            img={cssIMG}
                            name='CSS3'
                        />
                        <SkillCard
                            key={3}
                            img={phpIMG}
                            name='PHP'
                        />
                        <SkillCard
                            key={4}
                            img={postgresIMG}
                            name='Postgres'
                        />
                        <SkillCard
                            key={5}
                            img={vercelImg}
                            name='Vercel'
                        />
                    </div>
                    <div className="project-links">
                        <Link href="https://light-hall-task-manager.vercel.app/" target='_blank'>DEMO</Link>
                        <Link href="https://github.com/johnpatrick254/Light-Hall-Task-Manager" target='_blank'>CODE</Link>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
