'use client'

import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Smartphone, Globe, Database, Zap, Users, Star, ArrowRight, Menu, X, CheckCircle } from 'lucide-react';

export default function LumniLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const projects = [
    { name: "E-commerce Premium", tech: "Next.js + Stripe", result: "300% ↑ vendas" },
    { name: "App Delivery", tech: "React Native", result: "50k+ downloads" },
    { name: "ERP Empresarial", tech: "Node.js + PostgreSQL", result: "80% ↑ eficiência" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lumni
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Serviços</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projetos</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sobre</a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform shadow-md">
                Contato
              </button>
            </div>

            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
              <a href="#projects" className="block text-gray-700 hover:text-blue-600 font-medium">Projetos</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 font-medium">Sobre</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-gray-200 shadow-sm">
            <Zap className="w-4 h-4 mr-2 text-yellow-500" />
            <span className="text-sm text-gray-700">Transformando ideias em código</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Software que
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              impulsiona negócios
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Na Lumni, criamos soluções tecnológicas inovadoras que transformam desafios em oportunidades de crescimento
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25">
              Começar projeto
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 bg-white/50 backdrop-blur-sm">
              Ver portfólio
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nossos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologias modernas e metodologias ágeis para entregar resultados excepcionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Projetos que <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fazem a Diferença</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-600 font-bold text-lg">{project.result}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{project.tech}</p>
                <button className="text-blue-600 hover:text-blue-700 transition-colors flex items-center font-medium">
                  Ver detalhes <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Por que escolher a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lumni?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Equipe especializada com 5+ anos de experiência",
                  "Metodologia ágil com entregas rápidas",
                  "Suporte contínuo e manutenção inclusos",
                  "Tecnologias modernas e escaláveis"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100/80 to-purple-100/80 p-8 rounded-2xl border border-gray-200 backdrop-blur-sm shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Projetos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                    <div className="text-gray-600">Satisfação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-gray-600">Suporte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">5+</div>
                    <div className="text-gray-600">Anos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Pronto para <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Inovar?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Vamos conversar sobre como podemos transformar sua ideia em realidade
          </p>
          <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/25">
            Iniciar Conversa
            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Lumni
              </div>
              <p className="text-gray-600 leading-relaxed">
                Software house especializada em soluções inovadoras para impulsionar o crescimento do seu negócio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Serviços</h4>
              <div className="space-y-2 text-gray-600">
                <div>Desenvolvimento Web</div>
                <div>Apps Mobile</div>
                <div>Backend & APIs</div>
                <div>Software Personalizado</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Contato</h4>
              <div className="space-y-2 text-gray-600">
                <div>contato@lumni.dev</div>
                <div>+55 (11) 9999-9999</div>
                <div>São Paulo, SP</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 Lumni. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}