'use client'

import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 px-4 bg-[#0C2233]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C2233] to-[#0C2233]"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#F1E2A5]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FCE38A]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center bg-[#0C2233]/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-[#F1E2A5]/30 shadow-sm">
          <Zap className="w-4 h-4 mr-2 text-[#FCE38A]" />
          <span className="text-sm text-[#F1E2A5]">Transformando ideias em código</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-[#F1E2A5]">
          Software que
          <span className="block bg-gradient-to-r from-[#F1E2A5] via-[#FCE38A] to-[#F1E2A5] bg-clip-text text-transparent">
            impulsiona negócios
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#F1E2A5]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Na Lumni, criamos soluções tecnológicas inovadoras que transformam desafios em oportunidades de crescimento
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-gradient-to-r from-[#FCE38A] to-[#F1E2A5] text-[#0C2233] px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[#FCE38A]/25">
            Começar projeto
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-[#F1E2A5]/50 text-[#F1E2A5] hover:border-[#FCE38A] hover:text-[#FCE38A] transition-all duration-300 bg-[#0C2233]/50 backdrop-blur-sm">
            Ver portfólio
          </button>
        </div>
      </div>
    </section>
  );
}