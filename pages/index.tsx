import {GetStaticProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter, Revalia } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Headers from './components/headers'
import Hero from './components/hero'
import About from './components/about'
import WorkExp from './components/workExp'
import Skills from './components/skills'
import Projects from './components/project'
import ContactMe from './components/contactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperience'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'

const inter = Inter({ subsets: ['latin'] })

type Props={
   pageInfo: PageInfo;
   experiences: Experience[];
   skills: Skill[];
   projects: Project[];
   socials: Social[];
}

export default function Home({pageInfo,experiences,skills,projects,socials} : Props ) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{pageInfo?.name} -  Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers socials={socials}/>

      {/* Hero  */}
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* Work Experience */}
      <section id="experience" className='snap-center'>
        <WorkExp experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

       {/* Project Section */}
       <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

        {/* Contact Me Section */}
        <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
            className='h-10 w-10 rounded-full filter hover:grayscale
            cursor-pointer'
            src="https://i.pinimg.com/originals/18/9b/1c/189b1cd4e6f3af3cdc6d49b97addc892.png"
            alt=""
            />
          </div>
        </footer>
      </Link>

    </div>
  )
};

export const getStaticProps : GetStaticProps<Props> = async ()=>{
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },

    revalidate : 10       //nextjs will re generate the page when a req comes in every 10 sec
  }

}


