import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Alanbenny123/repos?sort=updated&per_page=20')
        const data = await response.json()
        
        // Priority order for specific projects
        const priorityOrder = {
          'student_behaviour_analysis': 1,
          'student-behaviour-analysis': 1,
          'severless_realtime_poll': 2,
          'severless-realtime-poll': 2,
          'severless-realtime-poll-2': 2,
          'bus_tracker': 3,
          'bus-tracker': 3,
          'bus-tracker-3': 3,
          'insta_grabber': 4,
          'insta-grabber': 4,
          'insta-grabber-': 4,
          'insta-grabber-4': 4,
          'anime_grabber': 5,
          'anime-grabber': 5,
          'anime-grabber-5': 5,
          'video_upscaler': 6,
          'video-upscaler': 6,
          'video-upscaler-6': 6,
          'expenses_tracker_with_gui': 7,
          'expenses-tracker-with-gui': 7,
          'expenses-tracker-with-gui-7': 7
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
        
        // Filter out forks and sort by priority
        const filteredRepos = data
          .filter(repo => !repo.fork && repo.name !== 'introduction-to-github')
          .map(repo => ({
            name: repo.name,
            description: repo.description || 'A project showcasing my development skills.',
            url: repo.html_url,
            language: repo.language || 'Mixed',
            updated: repo.updated_at,
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
          { name: 'Severless-Realtime-Poll-2', description: 'Serverless real-time polling application.', url: 'https://github.com/Alanbenny123/Severless-Realtime-Poll-2', language: 'Mixed' },
          { name: 'BUS-TRACKER', description: 'Real-time bus tracking application built with TypeScript.', url: 'https://github.com/Alanbenny123/BUS-TRACKER', language: 'TypeScript' },
          { name: 'Insta-grabber-', description: 'Instagram reels and photo downloader without watermark.', url: 'https://github.com/Alanbenny123/Insta-grabber-', language: 'TypeScript' },
          { name: 'Anime-Grabber-5', description: 'Anime content grabber application.', url: 'https://github.com/Alanbenny123/Anime-Grabber-5', language: 'Mixed' },
          { name: 'Video-Upscaler-6', description: 'AI-powered video upscaling application.', url: 'https://github.com/Alanbenny123/Video-Upscaler-6', language: 'Mixed' },
          { name: 'Expenses_tracker_with_GUI', description: 'GUI-based expense tracking application for managing personal finances.', url: 'https://github.com/Alanbenny123/Expenses_tracker_with_GUI', language: 'Python' }
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  return (
    <div className="App">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Alan Benny</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Alan Benny</span>
            <span className="title">AI-Driven Solutions Developer</span>
          </h1>
          <p className="hero-description">
            B.Tech Computer Science student passionate about creating AI-driven solutions and innovative applications
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-placeholder"></div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                A highly motivated B.Tech graduate in Computer Science with a specialization in Artificial Intelligence, seeking to leverage expertise in Python, JavaScript, and innovative project development to contribute to cutting-edge technology solutions.
              </p>
              <p>
                Passionate about creating impactful applications and solving real-world problems through programming and AI. Highly passionate about learning new things and acquiring new skills.
              </p>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-grid">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Artificial Intelligence</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title education-title">
            Education
            <span className="education-underline"></span>
          </h2>
          <div className="education-list">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-degree">B.Tech in Computer Science (Artificial Intelligence)</h3>
                  <span className="education-duration">2022 - 2026</span>
                </div>
                <p className="education-institution">Adi Shankara Institute of Engineering and Technology</p>
                <div className="education-coursework">
                  <span className="coursework-label">Relevant Coursework:</span>
                  <div className="coursework-tags">
                    <span className="coursework-tag">Artificial Intelligence</span>
                    <span className="coursework-tag">Machine Learning</span>
                    <span className="coursework-tag">Data Structures</span>
                    <span className="coursework-tag">Web Development</span>
                    <span className="coursework-tag">Software Engineering</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-card">
              <div className="education-icon">📚</div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-degree">Higher Secondary Education (CBSE)</h3>
                  <span className="education-duration">2020 - 2022</span>
                </div>
                <p className="education-institution">Viswajyothi CMI Public School, Angamaly, Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              Loading projects...
            </div>
          ) : (
            <div className="projects-grid">
              {repos.map((repo, index) => {
                const getEmoji = (name) => {
                  const lowerName = name.toLowerCase()
                  if (lowerName.includes('student') || lowerName.includes('behaviour')) return '📊'
                  if (lowerName.includes('poll') || lowerName.includes('severless')) return '🗳️'
                  if (lowerName.includes('bus')) return '🚌'
                  if (lowerName.includes('insta') && lowerName.includes('grabber')) return '📸'
                  if (lowerName.includes('anime') && lowerName.includes('grabber')) return '🎌'
                  if (lowerName.includes('video') && lowerName.includes('upscaler')) return '🎬'
                  if (lowerName.includes('expense') || lowerName.includes('tracker')) return '💰'
                  if (lowerName.includes('grabber')) return '📥'
                  if (lowerName.includes('ai') || lowerName.includes('machine')) return '🤖'
                  if (lowerName.includes('web') || lowerName.includes('app')) return '🌐'
                  return '💻'
                }
                
                return (
                  <div key={index} className="project-card">
                    <div className="project-image">
                      <div className="project-placeholder">{getEmoji(repo.name)}</div>
                    </div>
                    <div className="project-info">
                      <h3>{repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                      <p>{repo.description}</p>
                      <div className="project-links">
                        <span className="project-language">{repo.language}</span>
                        <a href={repo.url} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title skills-title">
            <span className="skills-text">Skills</span> <span className="ampersand">&</span> <span className="expertise-text">Expertise</span>
          </h2>
          <div className="skills-cards">
            <div className="skill-category-card">
              <div className="skill-icon">{"</>"}</div>
              <h3 className="skill-category-title">Programming</h3>
              <div className="skill-items">
                <span className="skill-item">Python</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">TypeScript</span>
                <span className="skill-item">HTML/CSS</span>
              </div>
            </div>
            <div className="skill-category-card">
              <div className="skill-icon">🔧</div>
              <h3 className="skill-category-title">Tools & Platforms</h3>
              <div className="skill-items">
                <span className="skill-item">Docker</span>
                <span className="skill-item">GitHub</span>
                <span className="skill-item">VS Code</span>
                <span className="skill-item">Git</span>
              </div>
            </div>
            <div className="skill-category-card">
              <div className="skill-icon">✨</div>
              <h3 className="skill-category-title">Domain Expertise</h3>
              <div className="skill-items">
                <span className="skill-item">Web Development</span>
                <span className="skill-item">AI & ML Fundamentals</span>
                <span className="skill-item">Computer Vision</span>
                <span className="skill-item">Data Structures</span>
              </div>
            </div>
          </div>
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
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            <div className="social-links">
              <a href="https://github.com/Alanbenny123" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Email</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Alan Benny. Built with React & Vite</p>
      </footer>
    </div>
  )
}

export default App
