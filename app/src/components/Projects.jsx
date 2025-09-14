// components/ProjectsSection.js
'use client'

import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    { name: "E-commerce Premium", tech: "Next.js + Stripe", result: "300% ↑ vendas" },
    { name: "App Delivery", tech: "React Native", result: "50k+ downloads" },
    { name: "ERP Empresarial", tech: "Node.js + PostgreSQL", result: "80% ↑ eficiência" }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-[#0C2233] to-[#0C2233]/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1E2A5]">
            Projetos que <span className="bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] bg-clip-text text-transparent">Fazem a Diferença</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#0C2233]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#F1E2A5]/30 hover:border-[#FCE38A] transition-all duration-300 group shadow-lg hover:shadow-xl">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FCE38A] to-[#F1E2A5] rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#0C2233]" />
                </div>
                <span className="text-[#FCE38A] font-bold text-lg">{project.result}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#F1E2A5] group-hover:text-[#FCE38A] transition-colors">
                {project.name}
              </h3>
              <p className="text-[#F1E2A5]/60 text-sm mb-4">{project.tech}</p>
              <button className="text-[#FCE38A] hover:text-[#F1E2A5] transition-colors flex items-center font-medium">
                Ver detalhes <ChevronRight className="ml-1 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}