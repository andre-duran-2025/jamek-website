"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Zap, TrendingUp, Shield, Users } from 'lucide-react'
import FadeInSection from '@/components/common/FadeInSection'
import AnimatedCounter from '@/components/common/AnimatedCounter'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <FadeInSection delay={0.2}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Automação Acessível para Pequenas Empresas
              </div>
            </FadeInSection>
            
            <FadeInSection delay={0.4}>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automação Industrial que{' '}
                <span className="text-primary">Impulsiona</span>{' '}
                Pequenas Empresas
              </h1>
            </FadeInSection>
            
            <FadeInSection delay={0.6}>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Reduza custos, aumente produtividade e ganhe competitividade com nossas soluções 
                acessíveis de automação industrial. ROI garantido em até 18 meses.
              </p>
            </FadeInSection>

            {/* Benefits */}
            <FadeInSection delay={0.8}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start text-sm">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  <span>+40% Produtividade</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-sm">
                  <Shield className="w-5 h-5 text-blue-500 mr-2" />
                  <span>-30% Custos</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start text-sm">
                  <Users className="w-5 h-5 text-purple-500 mr-2" />
                  <span>ROI em 18 meses</span>
                </div>
              </div>
            </FadeInSection>

            {/* CTA Buttons */}
            <FadeInSection delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group">
                  Solicitar Orçamento Gratuito
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Cases de Sucesso
                </Button>
              </div>
            </FadeInSection>

            {/* Trust indicators */}
            <FadeInSection delay={1.2}>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    <AnimatedCounter value={50} suffix="+" />
                  </div>
                  <div>Projetos</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    <AnimatedCounter value={10} suffix="+" />
                  </div>
                  <div>Anos</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">
                    <AnimatedCounter value={100} suffix="%" />
                  </div>
                  <div>Satisfação</div>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Right Content - Hero Image/Video */}
          <FadeInSection delay={0.4} direction="right">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video flex items-center justify-center">
                  {/* Placeholder for hero image/video */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-12 h-12 text-primary" />
                    </div>
                    <p className="text-gray-600">
                      Painel de Controle Industrial
                      <br />
                      <span className="text-sm">Vídeo demonstrativo em breve</span>
                    </p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <FadeInSection delay={1.4} direction="down">
                  <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="text-xs text-gray-500">Economia Mensal</div>
                    <div className="font-bold text-green-600">R$ 15.000</div>
                  </div>
                </FadeInSection>
                
                <FadeInSection delay={1.6} direction="up">
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                    <div className="text-xs text-gray-500">Eficiência</div>
                    <div className="font-bold text-blue-600">+40% OEE</div>
                  </div>
                </FadeInSection>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

export default Hero 