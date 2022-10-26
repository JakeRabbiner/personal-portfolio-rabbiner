import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import {Experience, PageInfo, Project, Skill, Social} from "../typings"
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-manditory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo.name} - Portfolio</title>
      </Head>

    <Header socials={socials} />

    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero pageInfo ={pageInfo}/>

    </section>

    {/* About */}
    <section id="about" className="snap-center">
      <About pageInfo ={pageInfo}/>
    </section>

    {/* Experiences */}
    <section id="experience" className="snap-center">
      <WorkExperience experiences = {experiences} />
    </section>

    {/* Skills */}
    <section id="skills" className="snap-start">
      <Skills skills={skills} />
    </section>

    {/* Projects */}
    <section id="projects" className="snap-start">
      <Projects projects={projects}/>
    </section>

    {/* Contat Me */}
    <section id="contact" className="snap-start">
      <ContactMe />
    </section>

    <Link href="#hero">
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <img 
        className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" 
        src="https://media-exp1.licdn.com/dms/image/D4E03AQFT5DuFfrqaZA/profile-displayphoto-shrink_200_200/0/1664815584784?e=1671062400&v=beta&t=MCi0AvsUaRDqR6dwjYAVQ16UdVyCUy1YHikIMmI9CJ0" 
        alt="" />
      </div>
    </footer>
    </Link>
    </div>
  )
}
export default Home;

export const getStaticProps:GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo(); 
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills, 
      projects, 
      socials,
    },
    revalidate: 10, 
  };
};