"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, Mail, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import LeadForm from '@/components/forms/LeadForm'

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pronto para automatizar sua empresa?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Solicite um orçamento gratuito e descubra como podemos transformar 
              sua operação industrial com nossas soluções personalizadas.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Análise gratuita da sua operação</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Proposta personalizada em 24h</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">ROI comprovado e garantido</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Suporte técnico especializado</span>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contato">
                  <Mail className="w-4 h-4 mr-2" />
                  Formulário Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Lead Form */}
          <div>
            <LeadForm 
              title="Solicite seu orçamento gratuito"
              description="Preencha seus dados e nossa equipe entrará em contato em até 24 horas."
              ctaText="Solicitar Orçamento Gratuito"
            />
          </div>
        </div>
      </div>
    </section>
  )
}