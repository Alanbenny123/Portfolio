import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Settings, 
  MonitorSmartphone, 
  Lightbulb, 
  Rocket,
  Cloud,
  Code2,
  ShieldCheck,
  Cpu,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  BookOpen,
  Activity,
  Camera,
  BusFront,
  Wallet,
  Video,
  Tv,
  Vote
} from 'lucide-react';

const XLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-zinc-300 font-sans selection:bg-[#d4f600]/30 selection:text-white overflow-hidden relative">
      
      {/* Background Glows - Neon Lime Accent */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4f600]/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-[#d4f600]/5 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="w-8 h-8 rounded-lg bg-[#d4f600] flex items-center justify-center shadow-lg shadow-[#d4f600]/20">
            <Rocket className="w-4 h-4 text-black" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 bg-[#151515] rounded-full px-8 py-3 border border-white/10 shadow-xl">
            <a href="#about" className="text-xs tracking-wider uppercase font-bold hover:text-white transition-colors text-[#d4f600]">About Me</a>
            <a href="#projects" className="text-xs tracking-wider uppercase font-semibold text-zinc-500 hover:text-white transition-colors">Projects</a>
            <a href="#education" className="text-xs tracking-wider uppercase font-semibold text-zinc-500 hover:text-white transition-colors">Education</a>
            <a href="#skills" className="text-xs tracking-wider uppercase font-semibold text-zinc-500 hover:text-white transition-colors">Skills</a>
          </div>

          <a href="#contact" className="bg-[#d4f600] hover:bg-[#bde000] transition-all text-black px-7 py-2.5 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(212,246,0,0.2)] inline-block">
            Contact Me
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20 relative z-10">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 pt-12 pb-32 flex flex-col items-center">
          
          <div className="w-full flex-col md:flex-row flex justify-between items-start md:items-center relative">
            {/* Left Top */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <h1 className="text-6xl md:text-[7rem] leading-none font-display font-bold text-white tracking-tighter mb-4">
                Hello,
              </h1>
              <p className="text-zinc-400 max-w-xs text-sm leading-relaxed font-light">
                Delivering efficient, scalable solutions to transform your tech vision into reality
              </p>
            </motion.div>

            {/* Right Top */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="z-10 text-right mt-12 md:mt-0"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight tracking-tighter">
                I am <br />
                <span className="text-gradient">Alan Benny</span>
              </h2>
            </motion.div>
          </div>

          {/* Center Image & Nodes */}
          <div className="relative w-full flex justify-center mt-16 md:-mt-24 z-10">
             {/* Custom Node Connections */}
             <div className="absolute top-1/4 left-[20%] w-[50%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
             
             {/* MOVED DOWN to top-[45%] per user request */}
             <div className="absolute top-[45%] right-0 xl:right-[5%] hidden lg:flex flex-col items-end gap-6 w-full lg:w-auto overflow-visible z-20">
                <a href="https://github.com/Alanbenny123" target="_blank" rel="noreferrer" className="p-3 rounded-xl bento-card text-zinc-400 hover:text-black hover:bg-[#d4f600] transition-all duration-300 shadow-xl relative group hover:scale-110 cursor-pointer border hover:border-[#d4f600]">
                  <Github className="w-5 h-5 relative z-10" />
                  <div className="absolute right-full top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-l from-[#d4f600]/60 to-transparent transition-all duration-300 group-hover:from-[#d4f600] group-hover:shadow-[0_0_12px_#d4f600] w-[80px] lg:w-[150px] xl:w-[250px]" />
                </a>
                
                <a href="https://www.linkedin.com/in/alan-benny-7b8601292" target="_blank" rel="noreferrer" className="p-3 rounded-xl bento-card text-zinc-400 hover:text-black hover:bg-[#d4f600] transition-all duration-300 shadow-xl relative mr-12 group hover:scale-110 cursor-pointer border hover:border-[#d4f600]">
                  <Linkedin className="w-5 h-5 relative z-10" />
                  <div className="absolute right-full top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-l from-[#d4f600]/60 to-transparent transition-all duration-300 group-hover:from-[#d4f600] group-hover:shadow-[0_0_12px_#d4f600] w-[80px] lg:w-[150px] xl:w-[250px]" />
                </a>

                <a href="https://x.com/Alan_Benny199" target="_blank" rel="noreferrer" className="p-3 rounded-xl bento-card text-zinc-400 hover:text-black hover:bg-[#d4f600] transition-all duration-300 shadow-xl relative mr-24 group hover:scale-110 cursor-pointer border hover:border-[#d4f600]">
                  <XLogo className="w-5 h-5 relative z-10" />
                  <div className="absolute right-full top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-l from-[#d4f600]/60 to-transparent transition-all duration-300 group-hover:from-[#d4f600] group-hover:shadow-[0_0_12px_#d4f600] w-[80px] lg:w-[150px] xl:w-[250px]" />
                </a>
             </div>

             {/* Stacked Roles */}
             <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 hidden md:flex">
               {['AI/ML Engineer', 'Web Dev', 'CS Student'].map((role, i) => (
                 <div key={i} className="flex items-center gap-4 w-48 group cursor-pointer">
                   <div className="text-xs uppercase tracking-widest font-medium text-white transition-colors group-hover:text-[#d4f600]">{role}</div>
                   <div className="flex-1 h-[1px] bg-white/10 relative transition-colors group-hover:bg-[#d4f600]">
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-zinc-500 rounded-full transition-colors group-hover:bg-[#d4f600]"></div>
                   </div>
                 </div>
               ))}
             </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[340px] h-[400px] z-10"
            >
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#d4f600]/30 to-transparent p-[1px]">
                 <div className="w-full h-full rounded-[2.5rem] bg-[#0c0c0c] overflow-hidden relative">
                   <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0c0c0c] z-10" />
                   <img 
                     src="/profile.png" 
                     alt="Alan Benny" 
                     className="w-full h-full object-cover object-top grayscale hover:grayscale-[0.2] transition-all duration-700 opacity-80"
                   />
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Me Bento */}
        <section id="about" className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bento-card rounded-[2.5rem] p-10 md:p-14 flex flex-col lg:flex-row gap-16 items-center relative overflow-hidden group"
          >
            <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#d4f600]/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="lg:w-[45%] z-10">
              <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">About Me</h3>
              <p className="text-zinc-400 leading-relaxed font-light mb-8 text-sm md:text-base">
                I'm Alan Benny, a B.Tech Computer Science student specializing in Artificial Intelligence. I build efficient web apps, AI-powered tools, and open source projects — passionate about solving real-world problems through code.
              </p>
            </div>
            
            <div className="lg:w-[55%] flex flex-col gap-5 w-full z-10">
              <div className="bg-[#1a1a1a] p-5 rounded-[1.5rem] border border-[#d4f600]/10 flex items-center gap-6 group/card hover:bg-[#202020] hover:border-[#d4f600]/30 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-[#d4f600] flex items-center justify-center shrink-0">
                  <div className="w-5 h-5 rounded-[6px] bg-[#0c0c0c]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed group-hover/card:text-white transition-colors">
                    Build fast, modern web apps with React, Vite, and Tailwind CSS.
                  </p>
                </div>
                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0 group-hover/card:bg-[#d4f600] group-hover/card:border-[#d4f600] group-hover/card:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-[#1a1a1a] p-5 rounded-[1.5rem] border border-[#d4f600]/10 flex items-center gap-6 group/card hover:bg-[#202020] hover:border-[#d4f600]/30 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center shrink-0 group-hover/card:bg-[#d4f600] transition-colors">
                  <div className="grid grid-cols-2 gap-1 w-5 h-5">
                    <div className="bg-[#c0c0c0] group-hover/card:bg-[#0c0c0c] rounded-sm transition-colors" />
                    <div className="bg-[#c0c0c0] group-hover/card:bg-[#0c0c0c] rounded-sm opacity-50 transition-colors" />
                    <div className="bg-[#c0c0c0] group-hover/card:bg-[#0c0c0c] rounded-sm opacity-50 transition-colors" />
                    <div className="bg-[#c0c0c0] group-hover/card:bg-[#0c0c0c] rounded-sm transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed group-hover/card:text-white transition-colors">
                    Python, JavaScript, TypeScript — AI/ML, computer vision, and full-stack development.
                  </p>
                </div>
                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center shrink-0 group-hover/card:bg-[#d4f600] group-hover/card:border-[#d4f600] group-hover/card:text-black transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Project Showcase */}
        <section id="projects" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
                My Recent Projects
              </h3>
              <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
                Innovative AI-driven and web solutions built with real-world impact.
              </p>
            </div>
            <a href="https://github.com/Alanbenny123" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all flex items-center gap-2">
              View All on GitHub
            </a>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            {/* Large Card - Student Behaviour Analysis */}
            <div className="lg:col-span-2 row-span-2 bg-[#151515] border border-white/5 hover:border-[#d4f600]/20 rounded-[1.5rem] p-8 md:p-10 flex flex-col justify-between group transition-colors">
              <div>
                <div className="bg-[#d4f600]/10 text-[#d4f600] px-3 py-1 rounded-full text-xs font-medium w-fit mb-4">
                  Python - AI/ML
                </div>
                <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-[#d4f600] transition-colors">Student Behaviour Analysis</h4>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-lg mb-6">
                  AI-powered system for analyzing student behavior patterns using machine learning and computer vision. Helps educators identify students who need support.
                </p>
                <a href="https://github.com/Alanbenny123/Student_Behaviour_Analysis" target="_blank" rel="noreferrer" className="bg-[#d4f600] hover:bg-[#bde000] text-black px-5 py-2.5 rounded-full text-sm font-medium w-fit flex items-center gap-2 transition-colors">
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
              <div className="mt-12 w-full h-48 bg-[#1a1a1a] rounded-xl border border-white/5 flex items-center justify-center group-hover:border-[#d4f600]/20 transition-colors relative overflow-hidden">
                 <Activity className="w-24 h-24 drop-shadow-2xl stroke-white group-hover:stroke-[#d4f600] opacity-90 transform group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
            </div>

            {/* Insta Grabber */}
            <div className="col-span-1 bg-[#151515] border border-white/5 hover:border-[#d4f600]/20 rounded-[1.5rem] p-8 flex flex-col group transition-colors">
              <div className="text-blue-400 text-xs font-medium mb-2">TypeScript</div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4f600] transition-colors">Insta Grabber</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                Instagram reels & photos downloader without watermark.
              </p>
              <a href="https://insta-grabber-black.vercel.app/" target="_blank" rel="noreferrer" className="text-[#d4f600] hover:text-[#bde000] text-sm font-medium flex items-center gap-1 w-fit mb-8 transition-colors">
                Live Demo <ArrowUpRight className="w-3 h-3" />
              </a>
              <div className="w-full flex justify-center mt-auto">
                 <Camera className="w-16 h-16 drop-shadow-2xl stroke-zinc-400 group-hover:stroke-[#d4f600] opacity-90 transform group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
            </div>

            {/* Bus Tracker */}
            <div className="col-span-1 bg-[#151515] border border-white/5 hover:border-[#d4f600]/20 rounded-[1.5rem] p-8 flex flex-col group transition-colors">
              <div className="text-blue-400 text-xs font-medium mb-2">TypeScript</div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4f600] transition-colors">Bus Tracker</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                Real-time bus tracking application.
              </p>
              <a href="https://bustracker-pi.vercel.app/" target="_blank" rel="noreferrer" className="text-[#d4f600] hover:text-[#bde000] text-sm font-medium flex items-center gap-1 w-fit mb-8 transition-colors">
                Live Demo <ArrowUpRight className="w-3 h-3" />
              </a>
              <div className="w-full flex justify-center mt-auto">
                 <BusFront className="w-16 h-16 drop-shadow-2xl stroke-zinc-400 group-hover:stroke-[#d4f600] opacity-90 transform group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Bottom 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Expenses Tracker */}
            <div className="bg-[#151515] border border-white/5 hover:border-[#d4f600]/20 rounded-[1.5rem] p-6 flex flex-col group transition-colors">
              <Wallet className="w-8 h-8 mb-6 stroke-zinc-400 group-hover:stroke-[#d4f600] transform group-hover:scale-110 transition-all duration-500 origin-left" strokeWidth={1.5} />
              <div className="text-blue-400 text-xs font-medium mb-1">Python</div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4f600] transition-colors">Expenses Tracker</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                GUI-based personal finance tracker.
              </p>
              <a href="https://trackmyrupees.streamlit.app/" target="_blank" rel="noreferrer" className="text-[#d4f600] hover:text-[#bde000] text-sm font-medium flex items-center gap-1 w-fit mt-auto transition-colors">
                Live <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Video Upscaler */}
            <div className="bg-[#151515] border border-white/5 hover:border-[#d4f600]/20 rounded-[1.5rem] p-6 flex flex-col group transition-colors">
              <Video className="w-8 h-8 mb-6 stroke-zinc-400 group-hover:stroke-[#d4f600] transform group-hover:scale-110 transition-all duration-500 origin-left" strokeWidth={1.5} />
              <div className="text-blue-400 text-xs font-medium mb-1">Mixed</div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4f600] transition-colors">Video Upscaler</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                AI-powered video upscaling application.
              </p>
              <a href="https://video-upscaler.vercel.app/" target="_blank" rel="noreferrer" className="text-[#d4f600] hover:text-[#bde000] text-sm font-medium flex items-center gap-1 w-fit mt-auto transition-colors">
                Live <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Anime Grabber */}
            <div className="bg-[#151515] border border-white/5 hover:border-[#d4f600]/20 rounded-[1.5rem] p-6 flex flex-col group transition-colors">
              <Tv className="w-8 h-8 mb-6 stroke-zinc-400 group-hover:stroke-[#d4f600] transform group-hover:scale-110 transition-all duration-500 origin-left" strokeWidth={1.5} />
              <div className="text-blue-400 text-xs font-medium mb-1">Mixed</div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4f600] transition-colors">Anime Grabber</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                Anime content grabber application.
              </p>
              <a href="https://anime-grabber.vercel.app/" target="_blank" rel="noreferrer" className="text-[#d4f600] hover:text-[#bde000] text-sm font-medium flex items-center gap-1 w-fit mt-auto transition-colors">
                Live <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Serverless Poll */}
            <div className="bg-[#151515] border border-white/5 hover:border-[#d4f600]/20 rounded-[1.5rem] p-6 flex flex-col group transition-colors">
              <Vote className="w-8 h-8 mb-6 stroke-zinc-400 group-hover:stroke-[#d4f600] transform group-hover:scale-110 transition-all duration-500 origin-left" strokeWidth={1.5} />
              <div className="text-blue-400 text-xs font-medium mb-1">AWS</div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#d4f600] transition-colors">Serverless Poll</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                Real-time serverless polling app on AWS.
              </p>
              <a href="http://polling-app-frontend-905418437059.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noreferrer" className="text-[#d4f600] hover:text-[#bde000] text-sm font-medium flex items-center gap-1 w-fit mt-auto transition-colors">
                Live <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

        {/* Education & Highlights */}
        <section id="education" className="max-w-5xl mx-auto px-6 mb-32 flex flex-col items-center">
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-16 tracking-tight">
            Education & Highlights
          </h3>

          <div className="w-full flex flex-col gap-6">
            {/* B.Tech */}
            <div className="bg-[#151515] border border-white/5 rounded-[2rem] flex flex-col-reverse md:flex-row shadow-2xl overflow-hidden hover:border-[#d4f600]/20 transition-colors">
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full border border-[#d4f600]/20 text-[#d4f600] bg-[#d4f600]/5 text-xs font-mono font-medium tracking-wider">2022 – 2026</span>
                  <span className="px-3 py-1 rounded-full border border-white/5 text-zinc-400 bg-white/5 text-xs font-mono font-medium tracking-wider">AI/ML</span>
                  <span className="px-3 py-1 rounded-full border border-white/5 text-zinc-400 bg-white/5 text-xs font-mono font-medium tracking-wider">Web Dev</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">B.Tech in Computer Science (Artificial Intelligence)</h4>
                <p className="text-[#d4f600] mb-6 text-sm font-medium">Adi Shankara Institute of Engineering and Technology</p>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  Specialized in Artificial Intelligence with coursework in Machine Learning, Computer Vision, Data Structures, Software Engineering, and Web Development. Built multiple production-ready projects during this period.
                </p>
              </div>
              <div className="md:w-2/5 bg-[#121212] flex items-center justify-center p-12 min-h-[250px] border-b md:border-b-0 md:border-l border-white/5">
                 <GraduationCap className="w-24 h-24 drop-shadow-2xl stroke-zinc-400 hover:stroke-[#d4f600] opacity-90 transform hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
            </div>

            {/* High School */}
            <div className="bg-[#151515] border border-white/5 rounded-[2rem] flex flex-col md:flex-row shadow-2xl overflow-hidden hover:border-[#d4f600]/20 transition-colors">
              <div className="md:w-2/5 bg-[#121212] flex items-center justify-center p-12 min-h-[250px] border-b md:border-b-0 md:border-r border-white/5">
                 <BookOpen className="w-24 h-24 drop-shadow-2xl stroke-zinc-400 hover:stroke-[#d4f600] opacity-90 transform hover:scale-110 transition-all duration-500" strokeWidth={1.5} />
              </div>
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full border border-[#d4f600]/20 text-[#d4f600] bg-[#d4f600]/5 text-xs font-mono font-medium tracking-wider">2020 – 2022</span>
                  <span className="px-3 py-1 rounded-full border border-white/5 text-zinc-400 bg-white/5 text-xs font-mono font-medium tracking-wider">Science</span>
                  <span className="px-3 py-1 rounded-full border border-white/5 text-zinc-400 bg-white/5 text-xs font-mono font-medium tracking-wider">Programming</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Higher Secondary Education (CBSE)</h4>
                <p className="text-[#d4f600] mb-6 text-sm font-medium">Sree Sarada Vidyalaya, Kalady, Kerala</p>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  Completed higher secondary education with a focus on Science. Developed a strong foundation in mathematics and logical thinking that fuels my software development approach today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-7xl mx-auto px-6 mb-32">
          <h3 className="text-3xl font-display font-medium text-white text-center mb-16 tracking-tight">Let's Explore Popular<br/>Skills & Experience</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Settings, title: "Fast", desc: "Optimal performance, ensuring quick load times and seamless user experience.", active: true },
              { icon: MonitorSmartphone, title: "Responsive", desc: "Adaptive layouts designed to work flawlessly on any screen size from mobile to desktop." },
              { icon: Lightbulb, title: "Intuitive", desc: "Crafting user-friendly interfaces that prioritize ease of navigation." },
              { icon: Rocket, title: "Dynamic", desc: "Bringing web pages to life with interactive elements and modern animations." }
            ].map((skill, i) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={i} 
                className={`p-[1px] rounded-[2rem] overflow-hidden ${skill.active ? 'bg-gradient-to-b from-[#d4f600]/40 to-transparent' : 'bg-white/5 hover:bg-white/10'} transition-all duration-300 group cursor-pointer`}
              >
                <div className={`h-full p-8 rounded-[2rem] ${skill.active ? 'bg-[#151515]' : 'bento-card'} flex flex-col items-start`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-8 border ${skill.active ? 'bg-[#d4f600] border-[#d4f600] shadow-[0_0_15px_rgba(212,246,0,0.4)]' : 'bg-zinc-800/50 border-white/10 group-hover:border-[#d4f600]/50'} transition-all`} >
                    <skill.icon className={`w-5 h-5 ${skill.active ? 'text-black' : 'text-zinc-400 group-hover:text-[#d4f600] transition-colors'}`} />
                  </div>
                  <h4 className="text-lg font-medium text-white mb-3">{skill.title}</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/5 bg-[#0a0a0a] pt-24 pb-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4f600]/5 blur-[120px] rounded-t-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">
          <div className="col-span-1 md:col-span-1 border-r border-white/5 pr-8 hidden md:block">
            <div className="w-10 h-10 rounded-xl bg-[#d4f600] flex items-center justify-center mb-8 shadow-lg shadow-[#d4f600]/20">
              <Rocket className="w-5 h-5 text-black" />
            </div>
            <p className="text-zinc-500 text-xs font-light leading-relaxed max-w-[200px]">
              Get the latest updates, tech tips, and insights on IT solutions right in your inbox.
            </p>
          </div>
          
          <div>
            <h5 className="text-white text-sm font-semibold mb-8 uppercase tracking-widest">Quick Links</h5>
            <ul className="space-y-5">
              {[
                { name: 'About Me', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Education', href: '#education' },
                { name: 'Skills', href: '#skills' }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-400 hover:text-[#d4f600] text-sm font-light transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">Get In Touch</h3>
            <p className="text-zinc-400 font-light leading-relaxed mb-8 text-sm">
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Drop me a message and I'll get back to you!
            </p>

            <div className="flex flex-col gap-6">
              {/* Email */}
              <a href="mailto:alanbenny1357@gmail.com" className="flex items-center gap-5 group cursor-pointer w-fit">
                <div className="w-12 h-12 rounded-[1rem] bg-[#1c1c1c] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#d4f600]/10 group-hover:border-[#d4f600]/30 transition-colors">
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-[#d4f600] transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium mb-1">Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#d4f600] transition-colors">alanbenny1357@gmail.com</p>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Alanbenny123" target="_blank" rel="noreferrer" className="flex items-center gap-5 group cursor-pointer w-fit">
                <div className="w-12 h-12 rounded-[1rem] bg-[#1c1c1c] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#d4f600]/10 group-hover:border-[#d4f600]/30 transition-colors">
                  <Github className="w-5 h-5 text-zinc-400 group-hover:text-[#d4f600] transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium mb-1">GitHub</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#d4f600] transition-colors">github.com/Alanbenny123</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/alan-benny-7b8601292" target="_blank" rel="noreferrer" className="flex items-center gap-5 group cursor-pointer w-fit">
                <div className="w-12 h-12 rounded-[1rem] bg-[#1c1c1c] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#d4f600]/10 group-hover:border-[#d4f600]/30 transition-colors">
                  <Linkedin className="w-5 h-5 text-zinc-400 group-hover:text-[#d4f600] transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium mb-1">LinkedIn</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#d4f600] transition-colors">Alan Benny</p>
                </div>
              </a>

              {/* Twitter / X */}
              <a href="https://x.com/Alan_Benny199" target="_blank" rel="noreferrer" className="flex items-center gap-5 group cursor-pointer w-fit">
                <div className="w-12 h-12 rounded-[1rem] bg-[#1c1c1c] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#d4f600]/10 group-hover:border-[#d4f600]/30 transition-colors">
                  <XLogo className="w-5 h-5 text-zinc-400 group-hover:text-[#d4f600] transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium mb-1">Twitter / X</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#d4f600] transition-colors">@Alan_Benny199</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-8 flex justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest font-semibold border-t border-white/5 relative z-10">
          <p>© 2025 ALAN BENNY. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
