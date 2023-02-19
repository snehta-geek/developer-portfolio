import React from 'react'
import { motion } from "framer-motion"
import SkillKeys from './skillKeys'
import { Skill } from '@/typings'
import skill from '@/sanity/schemas/skill'


type Props = {
    skills: Skill[]
}

function Skills({ skills }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
    mx-auto items-center top-10"
        >
            <h3 className='absolute md:top-10 top-20 uppercase tracking-[20px] text-gray-500
        text-2xl'>
                Skills
            </h3>
            <h3 className='absolute md:top-28 top-28 uppercase tracking-[3px] text-gray-500
        text-sm'>Hover over a skill for currency profieciency
            </h3>
            
            <div className='grid md:grid-cols-4 grid-cols-3 gap-5 relative top-28 '>     
                {skills?.slice(0, skills.length / 2).map(skill => (
                    <SkillKeys key={skill._id} skill={skill} />

                ))}

                {skills?.slice(skills.length / 2, skills.length).map(skill => (
                    <SkillKeys key={skill._id} skill={skill} directionLeft/>

                ))}
            </div>
        </motion.div>
    )
}

export default Skills