/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Zap, 
  Smartphone, 
  Layout, 
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Terminal,
  BrainCircuit,
  Send,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
  >
    <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Code2 className="w-4 h-4 text-white" />
        </div>
        <span className="font-display font-bold text-lg">Alan Benny</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About Me</a>
        <a href="#experience" className="hover:text-primary transition-colors">Education</a>
        <a href="#services" className="hover:text-primary transition-colors">Skills</a>
      </div>
      <a href="mailto:alanbenny1357@gmail.com">
        <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90">
          Contact Me
        </Button>
      </a>
    </div>
  </motion.nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-8xl font-display font-extrabold mb-6 leading-tight">
          Hello, <br />
          <span className="text-muted-foreground">I am</span> <br />
          <span className="text-gradient">Alan Benny</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mb-8">
          B.Tech CS (AI) student delivering innovative, AI-driven solutions to transform ideas into reality.
        </p>
        <div className="flex flex-col gap-4">
          {['IT Engineer', 'Web Developer', 'AI Developer'].map((role) => (
            <div key={role} className="flex items-center gap-4 group">
              <div className="w-12 h-[1px] bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all" />
              <span className="text-xl font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {role}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-primary/20">
          <img 
            src="/profile.png"
            alt="Alan Benny"
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-4 -right-4 z-20 glass p-3 rounded-xl"
        >
          <Github className="w-6 h-6 text-primary" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 -left-8 z-20 glass p-3 rounded-xl"
        >
          <Linkedin className="w-6 h-6 text-primary" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-12 -right-8 z-20 glass p-3 rounded-xl"
        >
          <BrainCircuit className="w-6 h-6 text-primary" />
        </motion.div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[120px] rounded-full -z-10" />
      </motion.div>
    </div>
  </section>
);

const AboutMe = () => (
  <section id="about" className="py-20 px-6 bg-muted/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-display font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm Alan Benny, a B.Tech Computer Science student specializing in Artificial Intelligence at Adi Shankara Institute of Engineering and Technology (2022–2026). I'm passionate about creating AI-driven solutions, innovative web applications, and solving real-world problems through code.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="glass border-none">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Web Development</h4>
                  <p className="text-xs text-muted-foreground">React, TypeScript, Next.js, Vercel</p>
                </div>
              </CardContent>
            </Card>
            <Card className="glass border-none">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Programming</h4>
                  <p className="text-xs text-muted-foreground">Python, JavaScript, TypeScript, HTML/CSS</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-48 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center">
              <BrainCircuit className="w-16 h-16 text-primary/40" />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden bg-muted/50 flex items-center justify-center">
              <Code2 className="w-16 h-16 text-primary/30" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-64 rounded-2xl overflow-hidden bg-muted/50 flex items-center justify-center">
              <Database className="w-16 h-16 text-primary/30" />
            </div>
            <div className="h-48 rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center">
              <Cloud className="w-16 h-16 text-primary/40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-display font-bold mb-12 text-center">Education & Highlights</h2>
      <div className="space-y-12">
        {[
          {
            title: "B.Tech in Computer Science (Artificial Intelligence)",
            company: "Adi Shankara Institute of Engineering and Technology",
            period: "2022 – 2026",
            tags: ["AI/ML", "Web Dev"],
            description: "Specialized in Artificial Intelligence with coursework in Machine Learning, Computer Vision, Data Structures, Software Engineering, and Web Development. Built multiple production-ready projects during this period.",
            icon: "🎓"
          },
          {
            title: "Higher Secondary Education (CBSE)",
            company: "Sree Sarada Vidyalaya, Kalady, Kerala",
            period: "2020 – 2022",
            tags: ["Science", "Programming"],
            description: "Completed higher secondary education with a focus on Science. Developed a strong foundation in mathematics and logical thinking that fuels my software development approach today.",
            icon: "📚"
          }
        ].map((exp, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group grid md:grid-cols-2 gap-8 items-center glass p-8 rounded-3xl"
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="text-primary border-primary/20">{exp.period}</Badge>
                {exp.tags.map(tag => <Badge key={tag} className="bg-muted text-muted-foreground">{tag}</Badge>)}
              </div>
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <p className="text-primary font-medium mb-4">{exp.company}</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
            </div>
            <div className={`rounded-2xl h-64 bg-muted/30 flex items-center justify-center text-8xl ${i % 2 === 1 ? "md:order-1" : ""}`}>
              {exp.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="py-20 px-6 bg-muted/30">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-display font-bold mb-16">My Skills and Development</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Zap, title: "Fast", desc: "Optimized code and efficient algorithms ensure fast load times and lag-free interactions across all platforms." },
          { icon: Smartphone, title: "Responsive", desc: "Mobile-first design approach ensuring seamless experience across all devices and screen sizes." },
          { icon: Layout, title: "Intuitive", desc: "User-centered design with clean interfaces, smooth UX and intuitive navigation built with React." },
          { icon: Layers, title: "Dynamic", desc: "Interactive AI-powered applications built with modern frameworks like React, Next.js and Python." }
        ].map((skill, i) => (
          <Card key={i} className="glass border-none hover:bg-primary/5 transition-colors group">
            <CardContent className="p-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-display font-bold mb-4">My Recent Projects</h2>
          <p className="text-muted-foreground max-w-md">
            Innovative AI-driven and web solutions built with real-world impact.
          </p>
        </div>
        <a href="https://github.com/Alanbenny123" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="rounded-full">View All on GitHub</Button>
        </a>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Featured project */}
        <div className="md:col-span-2 glass rounded-3xl overflow-hidden group">
          <div className="p-8">
            <Badge className="mb-4 bg-primary/20 text-primary border-none">Python · AI/ML</Badge>
            <h3 className="text-3xl font-bold mb-4">Student Behaviour Analysis</h3>
            <p className="text-muted-foreground mb-6 max-w-lg">
              AI-powered system for analyzing student behavior patterns using machine learning and computer vision. Helps educators identify students who need support.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://github.com/Alanbenny123/Student_Behaviour_Analysis" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full">
                  <Github className="w-4 h-4 mr-2" /> View Code
                </Button>
              </a>
            </div>
          </div>
          <div className="px-8 pb-0 h-48 bg-primary/5 flex items-center justify-center text-8xl">
            📊
          </div>
        </div>
        
        {/* Side projects */}
        <div className="space-y-6">
          {[
            {
              name: "Insta Grabber",
              desc: "Instagram reels & photos downloader without watermark.",
              emoji: "📸",
              live: "https://insta-grabber-black.vercel.app/",
              lang: "TypeScript"
            },
            {
              name: "Bus Tracker",
              desc: "Real-time bus tracking application.",
              emoji: "🚌",
              live: "https://bustracker-pi.vercel.app/",
              lang: "TypeScript"
            }
          ].map((proj) => (
            <div key={proj.name} className="glass rounded-3xl overflow-hidden group">
              <div className="p-6">
                <Badge className="mb-2 bg-muted text-muted-foreground border-none text-xs">{proj.lang}</Badge>
                <h4 className="font-bold mb-2">{proj.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{proj.desc}</p>
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Live Demo <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="h-24 bg-muted/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                {proj.emoji}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More projects row */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {[
          { name: "Expenses Tracker", desc: "GUI-based personal finance tracker.", emoji: "💰", live: "https://trackmyrupees.streamlit.app/", lang: "Python" },
          { name: "Video Upscaler", desc: "AI-powered video upscaling application.", emoji: "🎬", live: "https://video-upscaler.vercel.app/", lang: "Mixed" },
          { name: "Anime Grabber", desc: "Anime content grabber application.", emoji: "🎌", live: "https://anime-grabber.vercel.app/", lang: "Mixed" },
          { name: "Serverless Poll", desc: "Real-time serverless polling app on AWS.", emoji: "🗳️", live: "http://polling-app-frontend-905418437059.s3-website-us-east-1.amazonaws.com/", lang: "AWS" },
        ].map((proj) => (
          <Card key={proj.name} className="glass border-none group hover:bg-primary/5 transition-colors">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">{proj.emoji}</div>
              <Badge className="mb-3 bg-muted text-muted-foreground border-none text-xs">{proj.lang}</Badge>
              <h4 className="font-bold mb-2">{proj.name}</h4>
              <p className="text-xs text-muted-foreground mb-4">{proj.desc}</p>
              <a href={proj.live} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Live <ArrowUpRight className="w-3 h-3" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20 px-6 bg-muted/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold mb-4">Skills & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Combining AI, web development, and software engineering to build impactful solutions.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { 
            icon: BrainCircuit, 
            title: "AI & Machine Learning", 
            features: ["Computer Vision & Image Processing", "ML model training and deployment", "Student behavior analysis with AI"] 
          },
          { 
            icon: Globe, 
            title: "Web Development", 
            features: ["React.js, Next.js, TypeScript", "Full-stack applications", "Deployed on Vercel, AWS, Streamlit"] 
          },
          { 
            icon: Cpu, 
            title: "Python Development", 
            features: ["Data analysis and visualization", "Automation scripting", "GUI applications with Tkinter"] 
          },
          { 
            icon: Cloud, 
            title: "Cloud & DevOps", 
            features: ["AWS S3, Lambda, API Gateway", "Docker containerization", "GitHub Actions CI/CD pipelines"] 
          }
        ].map((service, i) => (
          <Card key={i} className="glass border-none p-8 hover:translate-y-[-4px] transition-all">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <service.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// ─── EmailJS config — fill these in after setting up emailjs.com ───
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Drop me a message and I'll get back to you!
            </p>
            <div className="space-y-4">
              <a href="mailto:alanbenny1357@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">alanbenny1357@gmail.com</p>
                </div>
              </a>
              <a href="https://github.com/Alanbenny123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="font-medium group-hover:text-primary transition-colors">github.com/Alanbenny123</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/alan-benny-7b8601292" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="font-medium group-hover:text-primary transition-colors">Alan Benny</p>
                </div>
              </a>
              <a href="https://x.com/Alan_Benny199" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Twitter / X</p>
                  <p className="font-medium group-hover:text-primary transition-colors">@Alan_Benny199</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="glass p-8 rounded-3xl">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                <Button variant="outline" className="rounded-xl mt-2" onClick={() => setStatus("idle")}>
                  Send Another
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Your Name</label>
                  <input
                    name="from_name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Your Email</label>
                  <input
                    name="from_email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-white/5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}
                <Button type="submit" disabled={status === "sending"} className="w-full rounded-xl gap-2">
                  {status === "sending"
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    : <><Send className="w-4 h-4" /> Send Message</>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="pt-20 pb-10 px-6 bg-muted/30 border-t">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-xl">Alan Benny</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            B.Tech CS (AI) student passionate about building innovative AI-driven solutions and modern web applications.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
            <li><a href="#experience" className="hover:text-primary transition-colors">Education</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Skills</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Social Media</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="https://x.com/Alan_Benny199" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                Twitter <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alan-benny-7b8601292" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Alanbenny123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
            <li>
              <a href="mailto:alanbenny1357@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                Email <ArrowUpRight className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Get In Touch</h4>
          <p className="text-sm text-muted-foreground mb-4">Have a project in mind? Let's talk!</p>
          <a href="mailto:alanbenny1357@gmail.com">
            <Button className="rounded-full w-full">Send a Message</Button>
          </a>
        </div>
      </div>
      
      <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2025 Alan Benny. Built with React & Vite.</p>
        <div className="flex gap-6">
          <a href="https://github.com/Alanbenny123" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
          <a href="mailto:alanbenny1357@gmail.com" className="hover:text-primary">alanbenny1357@gmail.com</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
