import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Copy, Download, Github, Mail, MapPin, Menu, X } from 'lucide-react'
import './App.css'

const projects = [
  {
    title: 'DevSkill Tracker',
    label: 'Final Year Project · Developer productivity',
    description: 'A VS Code companion that turns coding activity into a clear picture of skill growth. It pairs a fine-tuned ML model with quest generation and a focused web dashboard.',
    tags: ['TypeScript', 'React', 'VS Code API', 'ML integration'],
    live: 'https://fyp-ten-gray.vercel.app',
    github: 'https://github.com/mubashir142/dev_skill_tracker',
    visual: 'devskill',
  },
  {
    title: 'SpatialView',
    label: 'Full-stack geospatial platform',
    description: 'A spatial dashboard for exploring facilities, administrative boundaries, and service coverage—backed by an Express API and parameterized PostGIS queries.',
    tags: ['React', 'Express', 'PostgreSQL', 'PostGIS'],
    live: 'https://spatialview-phase3.vercel.app',
    github: 'https://github.com/mubashir142/spatialview-phase3',
    visual: 'spatial',
  },
  {
    title: 'Islamabad City Explorer',
    label: 'Interactive mapping experience',
    description: 'A responsive city map with place search, category filters, independent layers, and day/night modes. Built with open map data and automated GitHub Pages deployment.',
    tags: ['TypeScript', 'Leaflet', 'OpenStreetMap', 'Vite'],
    live: 'https://mubashir142.github.io/islamabad-city-explorer/',
    github: 'https://github.com/mubashir142/islamabad-city-explorer',
    visual: 'city',
  },
]

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function DevSkillArtwork() {
  return (
    <div className="artwork devskill-art" aria-label="DevSkill Tracker dashboard illustration">
      <div className="dev-window">
        <div className="window-top"><span className="window-dots">● ● ●</span><span>DevSkill / Overview</span><span className="window-status">● Tracking</span></div>
        <div className="dev-body">
          <div className="dev-sidebar"><b>DS</b><span className="side-active">Overview</span><span>Activity</span><span>Quests</span><span>Skills</span><i /></div>
          <div className="dev-main">
            <div className="dev-greeting"><small>MONDAY, 26 OCTOBER</small><strong>Good momentum, Mubashir.</strong></div>
            <div className="dev-stats"><div><small>FOCUS TIME</small><b>4h 28m</b><em>↑ 12% this week</em></div><div><small>SKILL SCORE</small><b>82<span>/100</span></b><em>Advanced</em></div><div><small>QUESTS</small><b>7<span>/9</span></b><em>2 remaining</em></div></div>
            <div className="dev-chart"><div className="chart-head"><b>Skill growth</b><span>Last 7 days</span></div><svg viewBox="0 0 520 140" role="img" aria-label="Upward skill growth chart"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#a6c8ff" stopOpacity=".5"/><stop offset="1" stopColor="#a6c8ff" stopOpacity="0"/></linearGradient></defs><path className="gridline" d="M0 25H520M0 70H520M0 115H520"/><path className="area" d="M0 118 C45 112,55 98,90 101 S145 82,180 86 S235 66,270 73 S325 53,360 58 S420 35,450 40 S495 20,520 16 L520 140 L0 140Z"/><path className="line" d="M0 118 C45 112,55 98,90 101 S145 82,180 86 S235 66,270 73 S325 53,360 58 S420 35,450 40 S495 20,520 16"/><circle cx="520" cy="16" r="5"/></svg></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SpatialArtwork() {
  return (
    <div className="artwork spatial-art" aria-label="SpatialView geospatial dashboard illustration">
      <div className="spatial-top"><b>SPATIAL<span>VIEW</span></b><span>Facility explorer</span><i>PK · ICT</i></div>
      <div className="spatial-body">
        <div className="spatial-panel"><small>COVERAGE ANALYSIS</small><b>Islamabad</b><span>Administrative area</span><div className="spatial-field">Facility category <strong>Healthcare⌄</strong></div><div className="spatial-field">Search radius <strong>2.5 km</strong></div><div className="spatial-result"><b>48</b><span>facilities found</span></div></div>
        <svg className="map-art" viewBox="0 0 600 460" role="img" aria-label="Abstract map with facility points and coverage circles"><path className="district" d="M53 36L217 22 281 97 253 189 112 211 31 133Z"/><path className="district" d="M281 97L420 49 554 108 532 236 392 258 253 189Z"/><path className="district" d="M112 211L253 189 392 258 349 420 180 400 65 323Z"/><path className="district" d="M392 258L532 236 571 369 476 438 349 420Z"/><path className="road" d="M-20 330C125 275 188 280 280 175S445 105 630 44"/><path className="road thin" d="M76 -20C126 119 235 193 281 262S358 405 400 480"/><circle className="coverage" cx="304" cy="224" r="100"/><g className="pins"><circle cx="304" cy="224" r="10"/><circle cx="222" cy="166" r="7"/><circle cx="385" cy="166" r="7"/><circle cx="369" cy="299" r="7"/><circle cx="208" cy="302" r="7"/></g></svg>
      </div>
    </div>
  )
}

function ProjectVisual({ type }: { type: string }) {
  if (type === 'devskill') return <DevSkillArtwork />
  if (type === 'spatial') return <SpatialArtwork />
  return <div className="artwork city-art"><img src="/projects/city-explorer.png" alt="Islamabad City Explorer interface with map filters and layers" /></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('work')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean) as Element[]
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.5] })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const copyEmail = async () => {
    const email = 'mubiatwork@gmail.com'
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      const field = document.createElement('textarea')
      field.value = email
      field.style.position = 'fixed'
      field.style.opacity = '0'
      document.body.appendChild(field)
      field.select()
      document.execCommand('copy')
      field.remove()
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Muhammad Mubashir, home"><span>MM</span><b>Mubashir</b></a>
        <nav className="pill-nav" aria-label="Main navigation">
          {navItems.map(item => <a key={item.label} href={item.href} className={active === item.href.slice(1) ? 'active' : ''}>{item.label}</a>)}
        </nav>
        <a className="header-cv" href="/Muhammad-Mubashir-CV.docx" download>Resume <Download size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">{navItems.map(item => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={18} /></a>)}<a href="/Muhammad-Mubashir-CV.docx" download>Download resume<Download size={18} /></a></nav>}
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-meta"><span>Software Engineer</span><span>Islamabad, Pakistan <MapPin size={14} /></span></div>
          <h1><span>Muhammad</span><span>Mubashir<span className="hero-dot">.</span></span></h1>
          <div className="hero-bottom">
            <div className="hero-index"><span>Frontend thinking.</span><span>Full-stack range.</span></div>
            <div className="hero-intro"><p>I build interactive web products that turn complex data into clear, useful experiences.</p><a className="primary-link" href="#work">Explore selected work <ArrowDown size={18} /></a></div>
          </div>
          <div className="hero-orbit" aria-hidden="true"><span>React</span><span>TypeScript</span><span>PostGIS</span><i /></div>
        </section>

        <section className="work-section" id="work">
          <div className="section-heading"><h2>Selected work</h2><p>A selection of products across developer tooling, machine learning, and geospatial data.</p></div>
          <div className="projects">
            {projects.map((project, index) => (
              <article className={`project project-${index + 1}`} key={project.title}>
                <a className="project-visual-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`Open live ${project.title} project`}><ProjectVisual type={project.visual} /><span className="visual-action">View live <ArrowUpRight size={18} /></span></a>
                <div className="project-info"><div><p className="project-label">{project.label}</p><h3>{project.title}</h3></div><div className="project-copy"><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={16} /></a><a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code</a></div></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-statement"><p className="mono-label">ABOUT / APPROACH</p><h2>Engineering with an eye for the <em>interface.</em></h2><p>I’m a Software Engineering graduate from PAF-IAST with a foundation in modern frontend development and growing full-stack experience. I care about clean implementation, thoughtful UI, and products that make data easier to act on.</p><a href="https://github.com/mubashir142" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={17} /></a></div>
          <div className="skills-panel"><div className="skill-row"><span>01</span><div><h3>Frontend</h3><p>React.js · JavaScript · TypeScript · HTML5 · CSS3 · Bootstrap</p></div></div><div className="skill-row"><span>02</span><div><h3>Backend & data</h3><p>REST APIs · C# · Web API · Entity Framework Core · MongoDB · MySQL · Firestore</p></div></div><div className="skill-row"><span>03</span><div><h3>Workflow</h3><p>Git · GitHub · GitHub Actions · Vercel · Manual QA · Agile collaboration</p></div></div><div className="skill-row"><span>04</span><div><h3>Currently exploring</h3><p>Python · Go · Next.js</p></div></div></div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-heading"><h2>Experience</h2><p>Professional teams, practical engineering, and a bias toward learning by building.</p></div>
          <div className="timeline">
            <article><div className="timeline-date">JUN — AUG 2025</div><div><h3>Full Stack / Software Engineering Intern</h3><h4>Bioinsights</h4></div><p>Contributed to frontend interfaces, backend server logic, data integration, performance optimization, and bug resolution within a professional engineering team.</p></article>
            <article><div className="timeline-date">SEP — OCT 2023</div><div><h3>Software Development Intern</h3><h4>Your Doctor Online (YDO) Pvt Limited</h4></div><p>Supported testing, feature integration, responsive UI development, and API debugging for client-facing healthcare web platforms.</p></article>
            <article><div className="timeline-date">GRADUATED 2026</div><div><h3>BS Software Engineering</h3><h4>PAF-IAST</h4></div><p>Coursework in OOP, databases, web technologies, data structures & algorithms, software project management, and computer networks.</p></article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-top"><p className="mono-label">OPEN TO OPPORTUNITIES</p><span><i /> Islamabad, Pakistan</span></div>
          <h2>Let’s build something<br /><em>useful together.</em></h2>
          <div className="contact-actions"><a href="mailto:mubiatwork@gmail.com" className="email-link">mubiatwork@gmail.com <ArrowUpRight /></a><button onClick={copyEmail} className="copy-button" aria-live="polite">{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? 'Copied' : 'Copy email'}</button></div>
        </section>
      </main>

      <footer><div><b>Muhammad Mubashir</b><span>Software Engineer</span></div><div className="footer-links"><a href="https://github.com/mubashir142" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="mailto:mubiatwork@gmail.com"><Mail size={14} /> Email</a><a href="tel:+923166625351">+92 316 6625351</a></div><a href="#top" className="back-top">Back to top ↑</a><small>© 2026 · English / Urdu</small></footer>
    </div>
  )
}

export default App
