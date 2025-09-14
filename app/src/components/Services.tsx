// components/ServicesSection.js
'use client'

import React from 'react';
import { Code, Smartphone, Globe, Database } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas e responsivas usando as últimas tecnologias como React, Next.js e Node.js"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Mobile",
      description: "Desenvolvimento nativo e híbrido para iOS e Android com React Native e Flutter"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & APIs",
      description: "Arquiteturas robustas e escaláveis com APIs RESTful, GraphQL e microsserviços"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Personalizado",
      description: "Soluções sob medida para automatizar processos e otimizar seu negócio"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-[#0C2233]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#F1E2A5]">
            Nossos <span className="bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-[#F1E2A5]/80 max-w-2xl mx-auto">
            Tecnologias modernas e metodologias ágeis para entregar resultados excepcionais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-[#0C2233]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#F1E2A5]/30 hover:border-[#FCE38A] transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
              <div className="text-[#FCE38A] mb-6 group-hover:scale-110 transition-transform group-hover:text-[#F1E2A5]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#F1E2A5] group-hover:text-[#FCE38A] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#F1E2A5]/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}