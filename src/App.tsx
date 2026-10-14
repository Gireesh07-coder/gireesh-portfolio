import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, ArrowUp, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import Navbar from './components/Navbar'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'
import { profile } from './data/profile'

type SocialBrand = 'github' | 'linkedin'

function SocialBrandIcon({ brand, size = 16 }: { brand: SocialBrand; size?: number }) {
  return (
    <svg aria-hidden="true" focusable="false" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      {brand === 'github' ? (
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.09.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.006 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z" />
      ) : (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
      )}
    </svg>
  )
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved === 'light' ? 'light' : 'dark'
  })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.12 }, transition: { duration: 0.55 } }

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-mark" /> SOFTWARE ENGINEER · BENGALURU, INDIA {profile.availability.enabled && profile.availability.label && <span className="availability"><i />{profile.availability.label}</span>}</div>
            <h1>I build software that solves <span>real-world problems.</span></h1>
            <p className="hero-intro">I’m Gireesh, a 2026 Computer Science graduate interested in building reliable applications, thoughtful backend systems, and useful software products.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDown size={16} /></a>
              <a className="button button-secondary" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">View My Resume <ArrowUpRight size={16} /></a>
              <a className="button button-secondary hero-contact-button" href="#contact">Contact me <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-links">
              <a href={profile.github} target="_blank" rel="noreferrer"><SocialBrandIcon brand="github" size={15} /> GitHub <ArrowUpRight size={13} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><SocialBrandIcon brand="linkedin" size={15} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href="#contact"><Mail size={15} /> Contact me <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <motion.div className="hero-art" aria-hidden="true" {...(reduceMotion ? {} : { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.15 } })}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
            <div className="art-core"><span className="core-g">G</span><span className="core-caption">ENGINEERING<br />WITH INTENTION</span></div>
            <div className="art-chip chip-top">JAVA <span>01</span></div>
            <div className="art-chip chip-right">SPRING BOOT <span>02</span></div>
            <div className="art-chip chip-bottom">RELIABLE SYSTEMS <span>03</span></div>
          </motion.div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={13} /></a>
        </section>

        <section className="section work-section" id="work">
          <div className="wrap">
            <motion.div className="section-heading" {...reveal}>
              <div><div className="eyebrow"><span className="eyebrow-mark" /> SELECTED WORK</div><h2>A live project <span className="muted-heading">/ what I’m building</span></h2></div>
              <p>EduHub is live. Other projects remain clearly marked while their implementations and details are completed or verified.</p>
            </motion.div>
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} total={projects.length} />)}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <motion.div className="wrap about-layout" {...reveal}>
            <div className="section-label"><div className="eyebrow"><span className="eyebrow-mark" /> A LITTLE ABOUT ME</div><h2>Curiosity, clarity, and code.</h2></div>
            <div className="about-content">
              <p className="about-lede">I’m a computer science graduate who enjoys turning ideas into software that is understandable, dependable, and useful.</p>
              <p>My interests sit across backend engineering and full-stack development—from designing APIs and working with data to building interfaces that make products feel intuitive. I’m currently strengthening my foundations through hands-on projects and continuous learning.</p>
              <p>Outside of a specific tech stack, I value clear problem-solving, thoughtful engineering decisions, and learning how the pieces of a system fit together.</p>
              <a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={15} /></a>
            </div>
          </motion.div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="wrap">
            <motion.div className="section-heading compact-heading" {...reveal}>
              <div><div className="eyebrow"><span className="eyebrow-mark" /> TOOLKIT</div><h2>Technologies I work with</h2></div>
              <p>A practical toolkit that continues to grow through study and project work.</p>
            </motion.div>
            <div className="skills-grid">
              {profile.skills.map((group, index) => <motion.div className="skill-group" key={group.name} {...(reduceMotion ? {} : { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.06 } })}>
                <span className="skill-index">0{index + 1}</span><h3>{group.name}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </motion.div>)}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="wrap">
            <motion.div className="section-heading compact-heading" {...reveal}>
              <div><div className="eyebrow"><span className="eyebrow-mark" /> EXPERIENCE</div><h2>Learning by doing.</h2></div>
              <p>Early career experience, with the details kept accurate and easy to update.</p>
            </motion.div>
            <motion.article className="timeline-card" {...reveal}>
              <div className="timeline-mark"><span /></div>
              <div className="timeline-main"><span className="card-kicker">INTERNSHIP · DATES TO BE ADDED</span><h3>Data Science Intern</h3><p className="timeline-org">Kodnest</p><p className="timeline-description">Data Science internship. Specific dates, responsibilities, and outcomes can be added here when confirmed.</p></div>
              <span className="timeline-type">PROFESSIONAL EXPERIENCE</span>
            </motion.article>
          </div>
        </section>

        <section className="section education-section" id="education">
          <motion.div className="wrap education-card" {...reveal}>
            <div className="education-left"><div className="eyebrow"><span className="eyebrow-mark" /> EDUCATION</div><h2>Grounded in<br />computer science.</h2></div>
            <div className="education-main"><span className="card-kicker">BACHELOR OF ENGINEERING · 2026</span><h3>Computer Science and Engineering</h3><p>Dr. Ambedkar Institute of Technology</p><p className="education-location">Bengaluru, Karnataka</p></div>
            <div className="cgpa"><span>CGPA</span><strong>8.19</strong><small>/ 10</small></div>
          </motion.div>
        </section>

        <section className="section achievements-section" id="achievements">
          <div className="wrap achievements-layout">
            <motion.div className="section-label" {...reveal}><div className="eyebrow"><span className="eyebrow-mark" /> MILESTONES</div><h2>Still writing<br />the next chapter.</h2><p className="achievement-intro">A good place for verified milestones as they happen—no placeholders pretending to be accolades.</p></motion.div>
            <div className="achievement-list">
              {profile.achievementCategories.map((category, index) => <motion.div className="achievement-row" key={category} {...(reduceMotion ? {} : { initial: { opacity: 0, x: 12 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: index * 0.07 } })}><span className="achievement-number">0{index + 1}</span><span>{category}</span><span className="achievement-status">DETAILS TO ADD</span></motion.div>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <motion.div className="wrap contact-inner" {...reveal}>
            <div className="eyebrow"><span className="eyebrow-mark" /> GET IN TOUCH</div>
            <h2>Have a good problem<br />to solve? <span>Let’s talk.</span></h2>
            <p>I’m interested in software engineering opportunities, thoughtful products, and connecting with people who enjoy building.</p>
            <div className="contact-actions"><a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <SocialBrandIcon brand="github" size={16} /></a></div>
            <a className="email-contact-card" href={`mailto:${profile.email}`} aria-label={`Email Gireesh at ${profile.email}`}><span className="email-icon"><Mail size={19} aria-hidden="true" /></span><span className="email-contact-copy"><span>Email Me</span><strong>{profile.email}</strong></span><ArrowUpRight className="email-contact-arrow" size={17} aria-hidden="true" /></a>
            <div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><SocialBrandIcon brand="linkedin" /> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><SocialBrandIcon brand="github" /> GitHub</a><a href={`mailto:${profile.email}`} aria-label={`Email Gireesh at ${profile.email}`}><Mail size={16} aria-hidden="true" /> Email</a></div>
          </motion.div>
        </section>
      </main>
      <footer className="footer"><div className="wrap footer-inner"><a className="footer-brand" href="#home">GSB<span>.</span></a><span>Designed & built with care · © {new Date().getFullYear()} Gireesh S Bhajantri</span><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialBrandIcon brand="github" size={17} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialBrandIcon brand="linkedin" size={17} /></a><a href={`mailto:${profile.email}`} aria-label={`Email Gireesh at ${profile.email}`}><Mail size={17} aria-hidden="true" /></a><a className="back-top" href="#home"><ArrowUp size={15} /> Back to top</a></div></div></footer>
    </>
  )
}

export default App
