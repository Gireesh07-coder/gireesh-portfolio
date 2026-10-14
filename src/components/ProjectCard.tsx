import { useState } from 'react'
import { ArrowDown, ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
  total: number
}

function ProjectArtwork({ variant }: { variant: Project['artwork'] }) {
  return (
    <div className={`project-artwork artwork-${variant}`} aria-hidden="true">
      {variant === 'eduhub' && <div className="eduhub-preview"><div className="eduhub-preview-nav"><span className="eduhub-mark">e</span><b>eduhub</b><span className="eduhub-preview-nav-link">EXPLORE</span><span className="eduhub-preview-nav-link">OUR APPROACH</span><i>JOIN</i></div><div className="eduhub-preview-hero"><span>A LITTLE PROGRESS GOES A LONG WAY</span><b>Make room for<br />what you want to become.</b><small>Practical learning for curious people ready to build their next skill.</small><i>Explore courses&nbsp; ↗</i></div><div className="eduhub-preview-courses"><span>FIND YOUR NEXT THING</span><b>A world of ideas, one click away.</b><div><i><span>COURSE 01</span><b>Physics 101</b></i><i><span>COURSE 02</span><b>Mathematics for JEE</b></i><i><span>COURSE 03</span><b>Python for Curious Minds</b></i></div></div></div>}
      {variant === 'brokerage' && <div className="mock-window trading-window"><div className="mock-top"><i /><i /><i /><span>project / preview</span></div><div className="mock-content"><div className="mock-sidebar"><b /><i /><i /><i /><i /></div><div className="mock-main"><div className="mock-welcome"><span>APPLICATION PREVIEW</span><b>Interface concept</b></div><div className="mock-cards"><i /><i /><i /></div><div className="mock-chart"><div className="chart-labels"><b>VISUAL ELEMENT</b><i>PLACEHOLDER</i></div><svg viewBox="0 0 420 90" preserveAspectRatio="none"><path d="M0 48 C34 44 48 52 78 46 S122 52 158 45 S204 48 241 43 S291 50 330 44 S383 48 420 43" /><path className="chart-area" d="M0 48 C34 44 48 52 78 46 S122 52 158 45 S204 48 241 43 S291 50 330 44 S383 48 420 43 V90 H0Z" /></svg></div></div></div></div>}
      {variant === 'smart-home' && <div className="device-scene"><div className="device-orbit" /><div className="device-device"><span className="device-indicator" /><div className="device-ring"><span /></div><small>DEVICE PREVIEW</small><div className="device-lines"><i /><i /><i /></div></div><div className="device-node node-one"><b>ESP32</b><span>component</span></div><div className="device-node node-two"><b>BLYNK</b><span>component</span></div><div className="device-connect connect-one" /><div className="device-connect connect-two" /></div>}
      {variant === 'shopping-analysis' && <div className="analysis-scene"><div className="analysis-top"><span>PROJECT PREVIEW</span><b>Visual concept</b><i>PLACEHOLDER</i></div><div className="analysis-metrics"><div><span>MODULE</span><i /></div><div><span>MODULE</span><i /></div></div><div className="analysis-visual"><div className="bar-set"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="donut"><span /></div></div><div className="analysis-legend"><i /> VISUAL PLACEHOLDER <i /> PROJECT ARTWORK</div></div>}
      <span className="artwork-grain" />
    </div>
  )
}

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <motion.article id={`project-${project.id}`} className={`project-card${project.featured ? ' project-featured' : ''}${project.status === 'IN PROGRESS' ? ' project-in-progress' : ''}`} {...(reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.12 }, transition: { duration: 0.5, delay: index * 0.1 } })}>
      <ProjectArtwork variant={project.artwork} />
      <div className="project-body">
        <div className="project-meta"><span>{project.category}</span><span>{project.status ?? `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`}</span></div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        {(project.demoUrl || project.repositoryUrl) && <div className="project-actions">
          {project.demoUrl && <a className="project-action project-action-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo <ArrowUpRight size={14} /></a>}
          {project.repositoryUrl && <a className="project-action" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">View Source Code <ExternalLink size={13} /></a>}
        </div>}
        <button className="case-toggle" type="button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? 'Close case study' : 'Explore case study'}<ChevronDown size={15} className={expanded ? 'chevron-open' : ''} /></button>
        {expanded && <div className="case-study">
          <div><h4>Problem statement</h4><p>{project.problem}</p></div>
          <div><h4>Implementation</h4><p>{project.implementation}</p></div>
          <div><h4>Overview</h4><p>{project.overview}</p></div>
          <div><h4>Architecture</h4><p>{project.architecture}</p></div>
          <div><h4>Features</h4><p>{project.features}</p></div>
          <div><h4>My contribution</h4><p>{project.contribution}</p></div>
          <div><h4>Engineering notes</h4><p>{project.challenges}</p></div>
          {(project.repositoryUrl || project.demoUrl) && <div className="case-links">{project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">Repository <ExternalLink size={14} /></a>}{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <ArrowUpRight size={14} /></a>}</div>}
          <a className="case-collapse" href={`#project-${project.id}`} onClick={(event) => { event.preventDefault(); setExpanded(false) }}>Collapse details <ArrowDown size={13} /></a>
        </div>}
      </div>
    </motion.article>
  )
}

export default ProjectCard
