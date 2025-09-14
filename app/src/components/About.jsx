// components/AboutSection.js
'use client'

import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const benefits = [
    "Equipe especializada com 5+ anos de experiência",
    "Metodologia ágil com entregas rápidas",
    "Suporte contínuo e manutenção inclusos",
    "Tecnologias modernas e escaláveis"
  ];

  const stats = [
    { value: "50+", label: "Projetos", color: "text-[#F1E2A5]" },
    { value: "98%", label: "Satisfação", color: "text-[#FCE38A]" },
    { value: "24/7", label: "Suporte", color: "text-[#F1E2A5]" },
    { value: "5+", label: "Anos", color: "text-[#FCE38A]" }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[#0C2233]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#F1E2A5]">
              Por que escolher a <span className="bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] bg-clip-text text-transparent">Lumni?</span>
            </h2>
            <div className="space-y-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-[#FCE38A] mr-4 flex-shrink-0" />
                  <span className="text-lg text-[#F1E2A5]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0C2233]/60 to-[#0C2233]/40 p-8 rounded-2xl border border-[#F1E2A5]/30 backdrop-blur-sm shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                    <div className="text-[#F1E2A5]/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}