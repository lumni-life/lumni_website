// components/TechStackSection.js
'use client'

import React from 'react';
import { Code2, Zap, Database, Palette, Server, Settings } from 'lucide-react';
import { SiReact, SiNextdotjs, SiVuedotjs, SiSvelte, SiTypescript, SiJavascript } from 'react-icons/si';
import { SiNodedotjs, SiLaravel, SiDjango, SiExpress, SiPhp, SiPython } from 'react-icons/si';
import { SiReact as SiReactNative, SiFlutter, SiDart } from 'react-icons/si';
import { SiTailwindcss, SiCss3, SiSass, SiBootstrap, SiHtml5 } from 'react-icons/si';
import { SiMysql, SiPostgresql, SiMongodb, SiFirebase } from 'react-icons/si';
import { SiDocker, SiGit, SiGraphql } from 'react-icons/si';

export default function TechStackSection() {
  const techStacks = [
    {
      title: "Frontend Development",
      icon: Zap,
      color: "from-blue-400 to-cyan-400",
       technologies: [
        { name: "React", color: "bg-blue-400", icon: <SiReact size={24} /> },
        { name: "Next.js", color: "bg-gray-800", icon: <SiNextdotjs size={24} /> },
        { name: "Vue.js", color: "bg-green-400", icon: <SiVuedotjs size={24} /> },
        { name: "Svelte", color: "bg-orange-500", icon: <SiSvelte size={24} /> },
        { name: "TypeScript", color: "bg-blue-500", icon: <SiTypescript size={24} /> },
        { name: "JavaScript", color: "bg-yellow-500", icon: <SiJavascript size={24} /> },
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-400 to-emerald-400",
      technologies: [
        { name: "Node.js", color: "bg-green-600", icon: <SiNodedotjs size={24} /> },
        { name: "Laravel", color: "bg-red-500", icon: <SiLaravel size={24} /> },
        { name: "Django", color: "bg-green-700", icon: <SiDjango size={24} /> },
        { name: "Express", color: "bg-gray-600", icon: <SiExpress size={24} /> },
        { name: "PHP", color: "bg-purple-600", icon: <SiPhp size={24} /> },
        { name: "Python", color: "bg-green-500", icon: <SiPython size={24} /> },
      ]
    },
    {
      title: "Mobile Development",
      icon: Settings,
      color: "from-purple-400 to-pink-400",
      technologies: [
        { name: "React Native", color: "bg-blue-500", icon: <SiReactNative size={24} /> },
        { name: "Flutter", color: "bg-blue-400", icon: <SiFlutter size={24} /> },
        { name: "Dart", color: "bg-cyan-500", icon: <SiDart size={24} /> },
      ]
    },
    {
      title: "UI/UX & Styling",
      icon: Palette,
      color: "from-pink-400 to-rose-400",
      technologies: [
        { name: "Tailwind CSS", color: "bg-teal-500", icon: <SiTailwindcss size={24} /> },
        { name: "CSS3", color: "bg-blue-600", icon: <SiCss3 size={24} /> },
        { name: "Sass", color: "bg-pink-500", icon: <SiSass size={24} /> },
        { name: "Bootstrap", color: "bg-purple-500", icon: <SiBootstrap size={24} /> },
        { name: "HTML5", color: "bg-orange-600", icon: <SiHtml5 size={24} /> },
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "from-yellow-400 to-orange-400",
      technologies: [
        { name: "MySQL", color: "bg-blue-700", icon: <SiMysql size={24} /> },
        { name: "PostgreSQL", color: "bg-blue-800", icon: <SiPostgresql size={24} /> },
        { name: "MongoDB", color: "bg-green-500", icon: <SiMongodb size={24} /> },
        { name: "Firebase", color: "bg-yellow-600", icon: <SiFirebase size={24} /> },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      color: "from-gray-400 to-slate-400",
      technologies: [
        { name: "Docker", color: "bg-blue-600", icon: <SiDocker size={24} /> },
        { name: "Git", color: "bg-orange-600", icon: <SiGit size={24} /> },
        { name: "GraphQL", color: "bg-pink-600", icon: <SiGraphql size={24} /> },
        { name: "REST API", color: "bg-green-600", icon: "🔗" } // REST API não tem logo oficial no react-icons  
      ]
    }
  ];

  const totalTechnologies = techStacks.reduce((total, stack) => total + stack.technologies.length, 0);

  return (
    <section className="py-20 px-4 bg-[#0C2233]/80 backdrop-blur-sm relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F1E2A5]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FCE38A]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FCE38A]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#F1E2A5] to-[#F1E2A5] max-w-20"></div>
            <div className="flex items-center mx-8">
              <div className="w-3 h-3 rounded-full bg-[#F1E2A5] mr-4"></div>
              <span className="text-[#FCE38A] font-mono text-sm tracking-wider">TECH STACK</span>
              <div className="w-3 h-3 rounded-full bg-[#F1E2A5] ml-4"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#F1E2A5] to-[#F1E2A5] max-w-20"></div>
          </div>

          <div className="inline-flex items-center bg-[#0C2233]/50 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-[#F1E2A5]/30 shadow-lg">
            <Code2 className="w-4 h-4 mr-2 text-[#FCE38A]" />
            <span className="text-sm text-[#F1E2A5]/80">Stack completo para desenvolvimento</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#F1E2A5]">
            Nossa <span className="bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-[#F1E2A5]/80 max-w-4xl mx-auto leading-relaxed">
            Dominamos as tecnologias mais avançadas do mercado para criar soluções escaláveis, performáticas e inovadoras
          </p>
        </div>

        {/* Tech Stacks Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techStacks.map((stack, stackIndex) => {
            const IconComponent = stack.icon;
            return (
              <div 
                key={stackIndex}
                className="group relative bg-gradient-to-br from-[#0C2233]/60 to-[#0C2233]/40 p-8 rounded-2xl border border-[#F1E2A5]/30 backdrop-blur-sm hover:border-[#FCE38A]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FCE38A]/10"
              >
                {/* Stack Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-r ${stack.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#F1E2A5] mb-1">{stack.title}</h3>
                    <span className="text-[#FCE38A] text-sm font-mono">
                      {stack.technologies.length} tecnologias
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="grid grid-cols-3 gap-4">
                  {stack.technologies.map((tech, index) => (
                    <div 
                      key={index}
                      className="group/tech relative bg-[#0C2233]/50 backdrop-blur-sm border border-[#F1E2A5]/20 rounded-lg p-3 hover:border-[#FCE38A]/40 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {/* Tech Icon */}
                      <div className="flex items-center justify-center mb-2">
                        <div className="text-xs font-bold text-[#F1E2A5] text-center leading-tight">
                          {tech.icon}
                        </div>
                      </div>
                      
                      {/* Tech Name */}
                      <h4 className="text-[#F1E2A5]/90 font-medium text-xs text-center group-hover/tech:text-[#F1E2A5] transition-colors leading-tight">
                        {tech.name}
                      </h4>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F1E2A5]/3 to-[#FCE38A]/3 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-200"></div>
                    </div>
                  ))}
                </div>

                {/* Stack hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1E2A5]/5 to-[#FCE38A]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-br from-[#0C2233]/80 to-[#0C2233]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#F1E2A5]/30 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#F1E2A5] mb-2">Nossa Capacidade Técnica</h3>
            <p className="text-[#F1E2A5]/70">Números que comprovam nossa experiência</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] bg-clip-text text-transparent mb-2">
                {totalTechnologies}+
              </div>
              <div className="text-[#F1E2A5]/70 text-sm">Tecnologias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FCE38A] mb-2">
                6
              </div>
              <div className="text-[#F1E2A5]/70 text-sm">Stacks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F1E2A5] mb-2">
                100+
              </div>
              <div className="text-[#F1E2A5]/70 text-sm">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#FCE38A] to-[#F1E2A5] bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-[#F1E2A5]/70 text-sm">Anos exp.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}