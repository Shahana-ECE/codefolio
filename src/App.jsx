
import { useState } from 'react'
import './App.css'
import Builder from './Builder'
function App() {
  const [search, setSearch] = useState('')
const [showBuilder, setShowBuilder] = useState(false)
  const projects = [
    { title: 'CodeFolio Portfolio', category: 'Web Development', icon: '💻' },
    { title: 'Weather App', category: 'JavaScript', icon: '🌦️' },
    { title: 'Student Dashboard', category: 'React', icon: '📚' },
  ]

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.category.toLowerCase().includes(search.toLowerCase())
  )
if (showBuilder) {
  return <Builder />
}
  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#">CodeFolio<span>.</span></a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
        <button
  className="nav-button"
  onClick={() => setShowBuilder(true)}
>
  Build My Portfolio ↗
</button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="tag">✦ YOUR CREATIVE DEVELOPER SPACE</span>
            <h1>Ideas into code.<br /><span>Projects into reality.</span></h1>
            <p>
              Discover projects, showcase your creativity, and build your
              developer journey one line of code at a time.
            </p>
            <a className="primary-button" href="#projects">Explore Projects →</a>
            <a className="secondary-button" href="#about">Learn More</a>
            <div className="hero-stats">
              <div><strong>01</strong><small>Creative thinking</small></div>
              <div><strong>02</strong><small>Building projects</small></div>
              <div><strong>03</strong><small>Growing together</small></div>
            </div>
          </div>
          <div className="hero-art">
            <div className="art-card">
              <div className="window-dots"><i></i><i></i><i></i></div>
              <p className="code-label">MY NEXT BIG IDEA</p>
              <div className="code-line"><span>01</span> const idea = "create";</div>
              <div className="code-line"><span>02</span> const dream = "build";</div>
              <div className="code-line"><span>03</span> function grow() {'{'}</div>
              <div className="code-line indent">learn();</div>
              <div className="code-line indent">build();</div>
              <div className="code-line">{'}'}</div>
              <div className="art-footer">✦ Keep creating. Keep growing.</div>
            </div>
            <div className="floating-badge">✳ Made with curiosity</div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <span className="tag">THE SHOWCASE</span>
              <h2>Explore projects<span>.</span></h2>
              <p>A little inspiration for your next big idea.</p>
            </div>
            <input
              className="search-box"
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">{project.icon}</div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>A starter idea to explore, learn, and create something amazing.</p>
                <a href="#about">Discover more ↗</a>
              </article>
            ))}
            {filteredProjects.length === 0 && (
              <p>No projects found. Try another search.</p>
            )}
          </div>
        </section>

        <section className="about-section" id="about">
          <span className="tag">YOUR JOURNEY STARTS HERE</span>
          <h2>Every great project starts with <span>one idea.</span></h2>
          <p>CodeFolio is a space to explore ideas, celebrate creativity, and turn what you learn into something real.</p>
          <a className="primary-button" href="#home">Back to top ↑</a>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">CodeFolio<span>.</span></a>
        <p>Designed with curiosity. Built for creativity.</p>
        <small>© 2026 CodeFolio</small>
      </footer>
    </div>
  )
}

export default App
