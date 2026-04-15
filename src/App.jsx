import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [skills, setSkills] = useState({
    programming: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    tools: ['Docker', 'GitHub', 'VS Code', 'Git'],
    expertise: ['Web Development', 'AI & ML Fundamentals', 'Computer Vision', 'Data Structures']
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
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
      <nav className={`side-navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-header">
          <div className="logo">AB</div>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="nav-footer">
          <a href="https://github.com/Alanbenny123" target="_blank" rel="noopener noreferrer" className="nav-social">GitHub</a>
          <a href="https://www.linkedin.com/in/alan-benny-7b8601292" target="_blank" rel="noopener noreferrer" className="nav-social">LinkedIn</a>
        </div>
      </nav>
      
      <div className="main-content">

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-badges">
            <span className="badge">IT Engineer</span>
            <span className="badge">Web Developer</span>
            <span className="badge">UI/UX Designer</span>
          </div>
          <h1 className="hero-title">
            <span className="greeting">Hello,</span>
            <div className="name-container">
              <span className="text-small">I am</span>
              <span className="name">Alan Benny</span>
            </div>
          </h1>
          <p className="hero-description">
            Experienced software engineer with expertise in multiple domains. 
            I build innovative solutions that blend creativity with technical excellence.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/profile.png" alt="Alan Benny" className="profile-picture" />
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
                {(() => {
                  // Curated mix: Top 4-5 programming languages + 2-3 key tools
                  const topLanguages = ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'React']
                    .filter(lang => skills.programming.includes(lang))
                    .slice(0, 5)
                  const keyTools = ['Git', 'GitHub', 'Vercel']
                    .filter(tool => skills.tools.includes(tool))
                  return [...topLanguages, ...keyTools].map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))
                })()}
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
                <p className="education-institution">Sree Sarada Vidyalaya, Kalady, Kerala</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Innovative IT Solutions<br /><span className="subtitle">Delivered</span></h2>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              Loading projects...
            </div>
          ) : (
            <div className="projects-bento-grid">
              {repos.slice(0, 6).map((repo, index) => {
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
                  <div key={index} className={`project-bento-card ${index === 0 ? 'featured' : ''}`}>
                    <div className="project-image-large">
                      <div className="project-placeholder-large">{getEmoji(repo.name)}</div>
                    </div>
                    <div className="project-info">
                      <h3>{repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                      <p>{repo.description}</p>
                      <div className="project-links">
                        <span className="project-language">{repo.language}</span>
                        {repo.liveUrl && (
                          <a href={repo.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                        )}
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
          <h2 className="section-title">Custom IT Solutions<br /><span className="subtitle">Tailored to Your Needs</span></h2>
          <div className="skills-cards">
            <div className="skill-category-card">
              <div className="skill-icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/>
                </svg>
              </div>
              <h3 className="skill-category-title">Cloud Infrastructure Setup</h3>
              <div className="skill-description">
                <p>• AWS, Azure, Google Cloud expertise</p>
                <p>• Scalable and reliable cloud architecture</p>
                <p>• DevOps and CI/CD pipeline integration</p>
              </div>
            </div>
            <div className="skill-category-card">
              <div className="skill-icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="skill-category-title">Responsive Web Development</h3>
              <div className="skill-description">
                <p>• Custom WordPress development</p>
                <p>• React.js, Next.js applications</p>
                <p>• Mobile-first, SEO-optimized design</p>
              </div>
            </div>
            <div className="skill-category-card">
              <div className="skill-icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className="skill-category-title">Cybersecurity Solutions</h3>
              <div className="skill-description">
                <p>• Vulnerability assessment</p>
                <p>• Penetration testing</p>
                <p>• Security audits and compliance</p>
              </div>
            </div>
            <div className="skill-category-card">
              <div className="skill-icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h3 className="skill-category-title">DevOps & Automation</h3>
              <div className="skill-description">
                <p>• CI/CD pipelines with Jenkins, Docker</p>
                <p>• Infrastructure as Code (Terraform)</p>
                <p>• Monitoring and alerting systems</p>
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
