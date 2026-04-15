import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false) // kept for navbar class only
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [skills, setSkills] = useState({
    programming: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    tools: ['Docker', 'GitHub', 'VS Code', 'Git'],
    expertise: ['Web Development', 'AI & ML Fundamentals', 'Computer Vision', 'Data Structures']
  })

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.nav-container')) {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('click', handleClickOutside)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Alanbenny123/repos?sort=updated&per_page=100')
        const data = await response.json()
        
        const defaultProgramming = ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'React']
        const defaultTools = ['Docker', 'GitHub', 'VS Code', 'Git', 'Vercel', 'AWS', 'Excel']
        const defaultExpertise = ['Web Development', 'AI & ML Fundamentals', 'Computer Vision', 'Data Structures', 'Data Analysis']
        
        const programmingLanguages = new Set(defaultProgramming)
        const tools = new Set(defaultTools)
        const expertise = new Set(defaultExpertise)
        
        data.forEach(repo => {
          if (!repo.fork) {
            const name = repo.name.toLowerCase()
            const desc = (repo.description || '').toLowerCase()
            const combined = name + ' ' + desc
            const lang = repo.language
            
            if (lang) programmingLanguages.add(lang)
            if (combined.includes('python') || lang === 'Python') programmingLanguages.add('Python')
            if (combined.includes('javascript') || lang === 'JavaScript') programmingLanguages.add('JavaScript')
            if (combined.includes('typescript') || lang === 'TypeScript') programmingLanguages.add('TypeScript')
            if (combined.includes('html') || combined.includes('css')) programmingLanguages.add('HTML/CSS')
            if (combined.includes('react')) programmingLanguages.add('React')
            if (combined.includes('node')) tools.add('Node.js')
            
            if (combined.includes('streamlit')) tools.add('Streamlit')
            if (combined.includes('vercel')) tools.add('Vercel')
            if (combined.includes('aws') || combined.includes('amazon')) tools.add('AWS')
            if (combined.includes('docker')) tools.add('Docker')
            
            if (combined.includes('web') || combined.includes('frontend') || combined.includes('backend')) {
              expertise.add('Web Development')
            }
            if (combined.includes('ai') || combined.includes('artificial intelligence') || 
                combined.includes('machine learning') || combined.includes('ml') ||
                name.includes('behaviour') || name.includes('upscaler')) {
              expertise.add('AI & ML Fundamentals')
            }
            if (combined.includes('computer vision') || combined.includes('cv') || 
                name.includes('upscaler') || name.includes('video')) {
              expertise.add('Computer Vision')
            }
            if (combined.includes('data structure') || combined.includes('algorithm')) {
              expertise.add('Data Structures')
            }
            if (combined.includes('data analysis') || combined.includes('data analytics') || 
                combined.includes('analytics') || name.includes('analysis') || name.includes('tracker')) {
              expertise.add('Data Analysis')
            }
          }
        })
        
        // Filter out non-programming languages (only keep actual programming languages)
        const actualProgrammingLanguages = ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'React', 'Java', 'C++', 'C', 'C#', 'Go', 'Rust', 'Swift', 'Kotlin', 'PHP', 'Ruby', 'R', 'Scala', 'Dart']
        const nonProgrammingItems = ['Jupyter Notebook', 'Shell', 'Dockerfile', 'Makefile', 'CMake']
        
        const programmingArray = Array.from(programmingLanguages)
          .filter(lang => actualProgrammingLanguages.includes(lang) && !nonProgrammingItems.includes(lang))
          .sort()
        
        // Move non-programming items to tools
        Array.from(programmingLanguages).forEach(item => {
          if (nonProgrammingItems.includes(item)) {
            tools.add(item)
          }
        })
        
        const toolsArray = Array.from(tools).sort()
        const expertiseArray = Array.from(expertise).sort()
        
        // Make Programming and Expertise equal length (use minimum of both)
        const minLength = Math.min(programmingArray.length, expertiseArray.length)
        const targetLength = Math.max(minLength, 4) // At least 4 items
        
        setSkills({
          programming: programmingArray.slice(0, targetLength),
          tools: toolsArray, // Show all tools, no limit
          expertise: expertiseArray.slice(0, targetLength)
        })
        
        // Priority order for specific projects
        const priorityOrder = {
          'student_behaviour_analysis': 1,
          'student-behaviour-analysis': 1,
          'severless_realtime_poll': 2,
          'severless-realtime-poll': 2,
          'severless-realtime-poll-2': 2,
          'insta_grabber': 3,
          'insta-grabber': 3,
          'insta-grabber-': 3,
          'insta-grabber-4': 3,
          'anime_grabber': 4,
          'anime-grabber': 4,
          'anime-grabber-5': 4,
          'video_upscaler': 5,
          'video-upscaler': 5,
          'video-upscaler-6': 5,
          'expenses_tracker_with_gui': 6,
          'expenses-tracker-with-gui': 6,
          'expenses-tracker-with-gui-7': 6,
          'bus_tracker': 7,
          'bus-tracker': 7,
          'bus-tracker-3': 7
        }
        
        const getPriority = (name) => {
          const lowerName = name.toLowerCase().replace(/-/g, '_')
          for (const [key, priority] of Object.entries(priorityOrder)) {
            if (lowerName.includes(key.replace(/-/g, '_')) || lowerName.includes(key.replace(/_/g, '-'))) {
              return priority
            }
          }
          return 999 // Lower priority for other repos
        }
        
        // Known live demo URLs for specific projects
        const liveDemoMap = {
          'insta-grabber-': 'https://insta-grabber-black.vercel.app/',
          'insta_grabber': 'https://insta-grabber-black.vercel.app/',
          'severless-realtime-poll-2': 'http://polling-app-frontend-905418437059.s3-website-us-east-1.amazonaws.com/',
          'severless_realtime_poll': 'http://polling-app-frontend-905418437059.s3-website-us-east-1.amazonaws.com/',
          'video-upscaler': 'https://video-upscaler.vercel.app/',
          'video_upscaler': 'https://video-upscaler.vercel.app/',
          'bus-tracker': 'https://bustracker-pi.vercel.app/',
          'bus_tracker': 'https://bustracker-pi.vercel.app/',
          'anime-grabber': 'https://anime-grabber.vercel.app/',
          'anime_grabber': 'https://anime-grabber.vercel.app/',
          'anime-grabber-5': 'https://anime-grabber.vercel.app/',
          'anime_grabber_5': 'https://anime-grabber.vercel.app/',
          'expenses-tracker-with-gui': 'https://trackmyrupees.streamlit.app/',
          'expenses_tracker_with_gui': 'https://trackmyrupees.streamlit.app/'
        }

        const filteredRepos = data
          .filter(repo => !repo.fork && repo.name !== 'introduction-to-github')
          .map(repo => ({
            name: repo.name,
            description: repo.description || 'A project showcasing my development skills.',
            url: repo.html_url,
            language: repo.language || 'Mixed',
            updated: repo.updated_at,
            liveUrl: (() => {
              const key = repo.name.toLowerCase()
              if (liveDemoMap[key]) return liveDemoMap[key]
              const alt1 = key.replace(/-/g, '_')
              const alt2 = key.replace(/_/g, '-')
              return liveDemoMap[alt1] || liveDemoMap[alt2]
            })(),
            priority: getPriority(repo.name)
          }))
          .sort((a, b) => {
            if (a.priority !== b.priority) {
              return a.priority - b.priority
            }
            return new Date(b.updated) - new Date(a.updated)
          })
          .map(({ priority, ...repo }) => repo) // Remove priority from final data
        setRepos(filteredRepos)
      } catch (error) {
        console.error('Error fetching repos:', error)
        // Fallback to known repos if API fails (in priority order)
        setRepos([
          { name: 'Student_Behaviour_Analysis', description: 'AI-powered analysis system for student behavior patterns using machine learning.', url: 'https://github.com/Alanbenny123/Student_Behaviour_Analysis', language: 'Python' },
          { name: 'Severless-Realtime-Poll-2', description: 'Serverless real-time polling application.', url: 'https://github.com/Alanbenny123/Severless-Realtime-Poll-2', language: 'Mixed', liveUrl: 'http://polling-app-frontend-905418437059.s3-website-us-east-1.amazonaws.com/' },
          { name: 'Insta-grabber-', description: 'Instagram reels and photo downloader without watermark.', url: 'https://github.com/Alanbenny123/Insta-grabber-', language: 'TypeScript', liveUrl: 'https://insta-grabber-black.vercel.app/' },
          { name: 'Anime-Grabber-5', description: 'Anime content grabber application.', url: 'https://github.com/Alanbenny123/Anime-Grabber-5', language: 'Mixed' },
          { name: 'Video-Upscaler-6', description: 'AI-powered video upscaling application.', url: 'https://github.com/Alanbenny123/Video-Upscaler-6', language: 'Mixed', liveUrl: 'https://video-upscaler.vercel.app/' },
          { name: 'Expenses_tracker_with_GUI', description: 'GUI-based expense tracking application for managing personal finances.', url: 'https://github.com/Alanbenny123/Expenses_tracker_with_GUI', language: 'Python', liveUrl: 'https://trackmyrupees.streamlit.app/' },
          { name: 'BUS-TRACKER', description: 'Real-time bus tracking application built with TypeScript.', url: 'https://github.com/Alanbenny123/BUS-TRACKER', language: 'TypeScript', liveUrl: 'https://bustracker-pi.vercel.app/' }
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  return (
    <div className="App">
      <nav className={`top-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="logo">AB</div>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>About Me</a></li>
            <li><a href="#education" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          </ul>
          <a href="#contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className="main-content">

      <section id="home" className="hero">
        {/* Left — roles */}
        <div className="hero-left">
          <h1 className="greeting">Hello,</h1>
          <p className="hero-tagline">
            Delivering efficient, scalable solutions to transform your tech vision into reality.
          </p>
          <div className="hero-roles-list">
            <div className="role-badge"><span className="role-dash">—</span><span>IT Engineer</span></div>
            <div className="role-badge"><span className="role-dash">—</span><span>Web Dev</span></div>
            <div className="role-badge"><span className="role-dash">—</span><span>Data Engineer</span></div>
          </div>
        </div>

        {/* Center — photo */}
        <div className="hero-center">
          <div className="photo-frame">
            <img src="/profile.png" alt="Alan Benny" className="profile-picture" />
          </div>
          <div className="social-float">
            <a href="https://github.com/Alanbenny123" target="_blank" rel="noopener noreferrer" className="social-icon-btn">GH</a>
            <a href="https://www.linkedin.com/in/alan-benny-7b8601292" target="_blank" rel="noopener noreferrer" className="social-icon-btn">in</a>
            <a href="https://x.com/Alan_Benny199" target="_blank" rel="noopener noreferrer" className="social-icon-btn">𝕏</a>
          </div>
        </div>

        {/* Right — name */}
        <div className="hero-right">
          <span className="i-am-label">I am</span>
          <h2 className="hero-name">Alan<br />Benny</h2>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title-left">About Me</h2>
          <div className="about-intro">
            <p>
              A highly motivated B.Tech graduate in Computer Science with a specialization in Artificial Intelligence. 
              Passionate about creating AI-driven solutions, innovative web applications, and solving real-world problems through programming.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">🎓</div>
              <div className="about-text">
                <h3>Education & Expertise</h3>
                <p>B.Tech in Computer Science (AI) from Adi Shankara Institute of Engineering and Technology (2022-2026)</p>
              </div>
              <div className="about-arrow">→</div>
            </div>
            <div className="about-card">
              <div className="about-icon">💡</div>
              <div className="about-text">
                <h3>Professional Skills</h3>
                <p>Expertise in Python, JavaScript, React, AI/ML, and modern web development technologies</p>
              </div>
              <div className="about-arrow">→</div>
            </div>
          </div>
          <div className="skills-showcase">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.programming.slice(0, 5).map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
              {skills.tools.slice(0, 4).map((tool, index) => (
                <span key={index + 10} className="skill-tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title-center">My Skills and Development</h2>
          <div className="skills-grid-four">
            <div className="skill-box">
              <div className="skill-icon-large">⚡</div>
              <h3>Fast</h3>
              <p>Fast load times and lag-free interaction with optimized code and efficient algorithms.</p>
            </div>
            <div className="skill-box">
              <div className="skill-icon-large">💻</div>
              <h3>Responsive</h3>
              <p>Mobile-first design approach ensuring seamless experience across all devices.</p>
            </div>
            <div className="skill-box">
              <div className="skill-icon-large">💡</div>
              <h3>Intuitive</h3>
              <p>User-centered design with clean interfaces and smooth user experiences.</p>
            </div>
            <div className="skill-box">
              <div className="skill-icon-large">🚀</div>
              <h3>Dynamic</h3>
              <p>Interactive applications with modern frameworks like React, Next.js, and TypeScript.</p>
            </div>
          </div>
          
          <div className="domain-expertise">
            <h3 className="expertise-title">Domain Expertise</h3>
            <div className="expertise-grid">
              {skills.expertise.map((exp, index) => (
                <div key={index} className="expertise-item">
                  <span className="check-icon">✓</span>
                  <span>{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title-center">My Recent Projects</h2>
          <p className="projects-subtitle">Innovative IT Solutions Delivered</p>
          
          {loading ? (
            <div className="loading-state">Loading projects...</div>
          ) : (
            <>
              <div className="project-showcase">
                <div className="project-mockups">
                  {repos.slice(0, 3).map((repo, index) => (
                    <div key={index} className="mockup-card">
                      <div className="mockup-screen">
                        <div className="mockup-emoji">{
                          repo.name.toLowerCase().includes('student') || repo.name.toLowerCase().includes('behaviour') ? '📊' :
                          repo.name.toLowerCase().includes('poll') ? '🗳️' :
                          repo.name.toLowerCase().includes('insta') ? '📸' :
                          repo.name.toLowerCase().includes('anime') ? '🎌' :
                          repo.name.toLowerCase().includes('video') ? '🎬' :
                          repo.name.toLowerCase().includes('expense') || repo.name.toLowerCase().includes('tracker') ? '💰' :
                          repo.name.toLowerCase().includes('bus') ? '🚌' : '💻'
                        }</div>
                      </div>
                      <div className="mockup-info">
                        <h4>{repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}</h4>
                        <p className="mockup-lang">{repo.language}</p>
                        {repo.liveUrl && (
                          <a href={repo.liveUrl} target="_blank" rel="noopener noreferrer" className="mockup-link">View Live →</a>
                        )}
                        <a href={repo.url} target="_blank" rel="noopener noreferrer" className="mockup-link">GitHub →</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {repos[0] && (
                <div className="project-featured">
                  <div className="featured-image">
                    <div className="featured-screen">
                      <div className="screen-header">
                        <div className="dots">
                          <span></span><span></span><span></span>
                        </div>
                        <div className="browser-url">{repos[0].liveUrl || 'github.com'}</div>
                      </div>
                      <div className="screen-content">
                        <div className="project-badge">{repos[0].language}</div>
                        <h3>{repos[0].name.replace(/-/g, ' ').replace(/_/g, ' ')}</h3>
                        <p>{repos[0].description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="featured-text">
                    <h3>Featured Project</h3>
                    <h2>{repos[0].name.replace(/-/g, ' ').replace(/_/g, ' ')}</h2>
                    <p>{repos[0].description}</p>
                    <ul className="project-highlights">
                      <li>Built with {repos[0].language}</li>
                      <li>Modern, scalable architecture</li>
                      <li>Responsive and user-friendly</li>
                      {repos[0].liveUrl && <li>Deployed and production-ready</li>}
                    </ul>
                    <div className="featured-links">
                      {repos[0].liveUrl && (
                        <a href={repos[0].liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Live</a>
                      )}
                      <a href={repos[0].url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Code</a>
                    </div>
                  </div>
                </div>
              )}

              <div className="all-projects">
                <h3>All Projects</h3>
                <div className="projects-list">
                  {repos.slice(3, 10).map((repo, index) => (
                    <div key={index} className="project-item">
                      <div className="project-item-header">
                        <h4>{repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}</h4>
                        <span className="project-lang">{repo.language}</span>
                      </div>
                      <p>{repo.description}</p>
                      <div className="project-item-links">
                        {repo.liveUrl && (
                          <a href={repo.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        )}
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">GitHub</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const name = formData.get('name')
              const email = formData.get('email')
              const message = formData.get('message')
              const subject = `Portfolio Contact: ${name}`
              const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`
              window.location.href = `mailto:alanbenny1357@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
            }}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <div className="social-links">
              <a href="https://github.com/Alanbenny123" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="https://www.linkedin.com/in/alan-benny-7b8601292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://x.com/Alan_Benny199?t=PVof75iPFNOYzP5rHBzr1A&s=08" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
              <a href="mailto:alanbenny1357@gmail.com" className="social-link">Email</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Alan Benny. Built with React & Vite</p>
      </footer>
      </div>
    </div>
  )
}

export default App
