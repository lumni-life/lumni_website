// components/CTASection.js
'use client'

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0C2233] to-[#0C2233]/80">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#F1E2A5]">
          Pronto para <span className="bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] bg-clip-text text-transparent">Inovar?</span>
        </h2>
        <p className="text-xl text-[#F1E2A5]/80 mb-12">
          Vamos conversar sobre como podemos transformar sua ideia em realidade
        </p>
        <button className="group bg-gradient-to-r from-[#FCE38A] to-[#F1E2A5] text-[#0C2233] px-12 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-[#FCE38A]/25">
          Iniciar Conversa
          <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}