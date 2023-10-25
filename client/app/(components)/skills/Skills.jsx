import React from 'react'
import SkillCard from "./skillcard"
import { frontEndSkills, backendEndSkills, currentlyLearning, toolSkills } from "./skill.util"
import "../../(styles)/skill/skill.style.css"
export default function Skills() {
    const frontend = frontEndSkills()
    const backend = backendEndSkills()
    const tools = toolSkills();
    const learning = currentlyLearning()
    return (
        <section id='skills' className='main'>
            <div className="skills-title">SKILLS</div>
            <div className="skill-body">
                <div className="skill-category">
                    <h2>Frontend</h2>
                </div>
                <div className="category-skills">
                    {
                        frontend.map((skill, i) => {
                            return <SkillCard
                                key={i}
                                name={skill.name}
                                img={skill.img}
                            />
                        })
                    }
                </div>
            </div>
            <div className="skill-body">
                <div className="skill-category">
                    <h2>Backend</h2>
                </div>
                <div className="category-skills">
                    {
                        backend.map((skill, i) => {
                            return <SkillCard
                                key={i}
                                name={skill.name}
                                img={skill.img}
                            />
                        })
                    }
                </div>
            </div>
            <div className="skill-body">
                <div className="skill-category">
                    <h2>Tools</h2>
                </div>
                <div className="category-skills">
                    {
                        tools.map((skill, i) => {
                            return <SkillCard
                                key={i}
                                name={skill.name}
                                img={skill.img}
                            />
                        })
                    }
                </div>
            </div>
            <div className="skill-body">
                <div className="skill-category">
                    <h2>Learning</h2>
                </div>
                <div className="category-skills">
                    {
                        learning.map((skill, i) => {
                            return <SkillCard
                                key={i}
                                name={skill.name}
                                img={skill.img}
                            />
                        })
                    }
                </div>
            </div>

        </section>
    )
}
