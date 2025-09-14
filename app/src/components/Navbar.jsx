'use client'

import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ scrolled, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0C2233]/95 backdrop-blur-md shadow-lg border-b border-[#F1E2A5]/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] bg-clip-text text-transparent">
            Lumni
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#F1E2A5]/80 hover:text-[#F1E2A5] transition-colors font-medium">Serviços</a>
            <a href="#projects" className="text-[#F1E2A5]/80 hover:text-[#F1E2A5] transition-colors font-medium">Projetos</a>
            <a href="#about" className="text-[#F1E2A5]/80 hover:text-[#F1E2A5] transition-colors font-medium">Sobre</a>
            <button className="bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] text-[#0C2233] px-6 py-2 rounded-full hover:scale-105 transition-transform shadow-md font-medium">
              Contato
            </button>
          </div>

          <button 
            className="md:hidden text-[#F1E2A5]/80 hover:text-[#F1E2A5] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0C2233]/95 backdrop-blur-md shadow-lg border-t border-[#F1E2A5]/20">
          <div className="px-4 py-6 space-y-4">
            <a href="#services" className="block text-[#F1E2A5]/80 hover:text-[#F1E2A5] font-medium transition-colors">Serviços</a>
            <a href="#projects" className="block text-[#F1E2A5]/80 hover:text-[#F1E2A5] font-medium transition-colors">Projetos</a>
            <a href="#about" className="block text-[#F1E2A5]/80 hover:text-[#F1E2A5] font-medium transition-colors">Sobre</a>
            <button className="w-full bg-gradient-to-r from-[#F1E2A5] to-[#FCE38A] text-[#0C2233] px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}