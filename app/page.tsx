"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Award,
  Briefcase,
  Mail,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";
import RotatingText from "@/components/RotatingText";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const roles = [
    "Software Engineer",
    "UI/UX Designer",
    "Data Analyst",
    "Frontend Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // waktu ganti 2 detik

    return () => clearInterval(interval);
  }, []);
  const tools = [
    { name: "HTML", icon: "./images/icons/html.png" },
    { name: "CSS", icon: "./images/icons/css.png" },
    { name: "JavaScript", icon: "./images/icons/JS.png" },
    { name: "PHP", icon: "./images/icons/php.png" },
    { name: "Laravel", icon: "./images/icons/laravel.png" },
    { name: "Figma", icon: "./images/icons/figma.png" },
    { name: "Canva", icon: "./images/icons/canva.png" },
    { name: "MySQL", icon: "./images/icons/mysql.png" },
    { name: "PostgreSQL", icon: "./images/icons/postgresql.png" },
    { name: "Git", icon: "./images/icons/git.png" },
    { name: "GitHub", icon: "./images/icons/github.png" },
    { name: "VS Code", icon: "./images/icons/vscode.png" },
    { name: "Python", icon: "./images/icons/python.png" },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-blue-900/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className={`text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              Ayu Enissa M Sinaga
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Experience
              </a>
              <a
                href="#certificates"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Certificates
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-20 gap-10"
      >
        <div
          className={`max-w-3xl w-full transition-all duration-1000 delay-300 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white leading-tight">
            <span className="text-white">Hello</span>
            <br />

            <p className="flex flex-wrap items-baseline gap-2 mt-2">
              <span className="font-semibold text-xl md:text-3xl">
                I'm Ayu Enissa, a
              </span>

              <RotatingText
                texts={roles}
                mainClassName="inline-block px-2 text-purple-400 overflow-hidden py-0 rounded-lg 
          text-3xl md:text-5xl leading-tight"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </p>
          </h1>

          {/* <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-950/50 border border-blue-800/30 rounded-lg text-blue-300 text-sm">React</span>
            <span className="px-3 py-1 bg-blue-950/50 border border-blue-800/30 rounded-lg text-blue-300 text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-blue-950/50 border border-blue-800/30 rounded-lg text-blue-300 text-sm">Node.js</span>
            <span className="px-3 py-1 bg-blue-950/50 border border-blue-800/30 rounded-lg text-blue-300 text-sm">Tailwind</span>
          </div> */}

          <div className="flex gap-3 mb-4">
            <a
              href="/form/CuriculumVitae_AyuEnissa.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
                     text-white px-6 py-7 text-lg group"
              >
                Download CV
                <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </a>

            <a href="mailto:ayuenissa@gmail.com">
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-600/50 px-6 py-7 text-lg"
              >
                Contact
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href="https://github.com/yuunichan"
              target="_blank"
              className="w-16 h-16 rounded-full bg-blue-950/50 border border-blue-800/30 flex items-center justify-center hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-8 h-8 text-blue-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayu-enissa-sinaga-14a252323/"
              target="_blank"
              className="w-16 h-16 rounded-full bg-blue-950/50 border border-blue-800/30 flex items-center justify-center hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-8 h-8 text-blue-300" />
            </a>
            <a
              href="https://www.instagram.com/yuuenissasng/"
              target="_blank"
              className="w-16 h-16 rounded-full bg-blue-950/50 border border-blue-800/30 flex items-center justify-center hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-8 h-8 text-blue-300" />
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <img src="./images/comeng.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        {/* SECTION TITLE */}
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-3 mb-12">
          <div className="w-6 h-6 text-blue-400 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-6 h-6 text-blue-400 animate-pulse" />
        </div>

        {/* CONTENT */}
        <div className="px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
            {/* LEFT COLUMN - ABOUT */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Hello, I'm
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ayu Enissa Maretty Sinaga
                </span>
              </h3>

              <p className="text-gray-400 leading-relaxed">
                A fifth-semester Information Technology student at the Del
                Institute of Technology, enthusiastic about pursuing a career in
                Software Engineering (UI/UX Design or Data Analysis).
                Experienced in organizing several medium-scale events, with
                responsibilities that include data processing, UI/UX design
                using Figma, and system analysis. Able to work with MySQL and
                PostgreSQL databases. Possess strong communication skills,
                effective teamwork, and a results-oriented mindset.
              </p>

              <div className="bg-blue-950/30 border border-blue-800/30 rounded-lg p-4">
                <p className="text-blue-300 italic">
                  &quot;Students are agents of change.&quot;
                </p>
              </div>              
            </div>

            {/* RIGHT COLUMN - TOOLS */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">
                Tools & Technologies
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-items-center">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="
                bg-blue-950/30
                border border-blue-800/30
                rounded-lg
                p-4
                flex flex-col items-center gap-2
                hover:bg-blue-950/50
                transition-all duration-300
                hover:scale-105
              "
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-15 h-15 object-contain"
                    />
                    <span className="text-blue-300 text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-gray-400">
              My professional journey and achievements
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-blue-950/30 border-blue-800/30 backdrop-blur-sm hover:bg-blue-950/50 transition-all duration-300 hover:translate-x-2 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Event Organizer
                    </h3>
                    <p className="text-blue-400 mb-2">
                      Various Organizations • 2020 - Present
                    </p>
                    <p className="text-gray-400">
                      Led and coordinated multiple medium-scale events, managing
                      data processing, UI/UX design implementation, and system
                      analysis. Collaborated with cross-functional teams to
                      ensure successful event execution.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-blue-900/50 border border-blue-700/30 rounded-full text-xs text-blue-300">
                        Event Management
                      </span>
                      <span className="px-3 py-1 bg-blue-900/50 border border-blue-700/30 rounded-full text-xs text-blue-300">
                        Team Leadership
                      </span>
                      <span className="px-3 py-1 bg-blue-900/50 border border-blue-700/30 rounded-full text-xs text-blue-300">
                        Data Processing
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-950/30 border-blue-800/30 backdrop-blur-sm hover:bg-blue-950/50 transition-all duration-300 hover:translate-x-2 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      UI/UX Designer
                    </h3>
                    <p className="text-purple-400 mb-2">
                      Freelance • 2021 - Present
                    </p>
                    <p className="text-gray-400">
                      Designed user interfaces and experiences using Figma for
                      various projects. Focused on creating intuitive and
                      visually appealing designs that enhance user engagement
                      and satisfaction.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-purple-900/50 border border-purple-700/30 rounded-full text-xs text-purple-300">
                        Figma
                      </span>
                      <span className="px-3 py-1 bg-purple-900/50 border border-purple-700/30 rounded-full text-xs text-purple-300">
                        UI Design
                      </span>
                      <span className="px-3 py-1 bg-purple-900/50 border border-purple-700/30 rounded-full text-xs text-purple-300">
                        UX Research
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-950/30 border-blue-800/30 backdrop-blur-sm hover:bg-blue-950/50 transition-all duration-300 hover:translate-x-2 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      IT Student
                    </h3>
                    <p className="text-pink-400 mb-2">
                      Del Institute of Technology • 2021 - Present
                    </p>
                    <p className="text-gray-400">
                      Fifth-semester student specializing in Software
                      Engineering with focus on UI/UX Design and Data Analysis.
                      Proficient in MySQL and PostgreSQL database management.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-pink-900/50 border border-pink-700/30 rounded-full text-xs text-pink-300">
                        MySQL
                      </span>
                      <span className="px-3 py-1 bg-pink-900/50 border border-pink-700/30 rounded-full text-xs text-pink-300">
                        PostgreSQL
                      </span>
                      <span className="px-3 py-1 bg-pink-900/50 border border-pink-700/30 rounded-full text-xs text-pink-300">
                        System Analysis
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="certificates"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Certificates
              </span>
            </h2>
            <p className="text-gray-400">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((cert) => (
              <Card
                key={cert}
                className="bg-blue-950/30 border-blue-800/30 backdrop-blur-sm hover:bg-blue-950/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Award className="w-20 h-20 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Certificate Title {cert}
                    </h3>
                    <p className="text-blue-400 text-sm mb-2">
                      Issuing Organization
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      Issued: December 2023
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-blue-500 text-blue-400 hover:bg-blue-950/50"
                    >
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-400">
              Let's create something amazing together
            </p>
          </div>

          <Card className="bg-blue-950/30 border-blue-800/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-800/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-800/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-blue-800/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 text-lg">
                  Send Message
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-blue-800/30">
                <div className="flex justify-center gap-6">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-blue-900/20 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>© 2023 yukawdinee. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with Next.js, React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
