// components/Footer.js
'use client'

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0C2233] py-12 px-4 border-t border-[#F1E2A5]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] bg-clip-text text-transparent mb-4">
              Lumni
            </div>
            <p className="text-[#F1E2A5]/80 leading-relaxed">
              Software house especializada em soluções inovadoras para impulsionar o crescimento do seu negócio.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#F1E2A5]">Serviços</h4>
            <div className="space-y-2 text-[#F1E2A5]/70">
              <div>Desenvolvimento Web</div>
              <div>Apps Mobile</div>
              <div>Backend & APIs</div>
              <div>Software Personalizado</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-[#F1E2A5]">Contato</h4>
            <div className="space-y-2 text-[#F1E2A5]/70">
              <div>contato@lumni.dev</div>
              <div>+55 (11) 9999-9999</div>
              <div>São Paulo, SP</div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F1E2A5]/20 mt-12 pt-8 text-center text-[#F1E2A5]/60">
          <p>&copy; 2025 Lumni. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}