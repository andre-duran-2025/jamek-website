import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Quote, 
  ArrowRight, 
  TrendingUp, 
  TrendingDown,
  DollarSign, 
  Clock,
  Building2,
  Utensils,
  Hammer
} from 'lucide-react'

const CasesPreview = () => {
  const cases = [
    {
      industry: "Indústria Alimentícia",
      sector: "Alimentício",
      icon: Utensils,
      challenge: "Tempo excessivo de setup entre lotes diferentes",
      solution: "Implementação de sistema automatizado de changeover",
      results: [
        { metric: "Redução de tempo", value: "35%", icon: Clock },
        { metric: "Economia mensal", value: "R$ 15k", icon: DollarSign },
        { metric: "ROI", value: "12 meses", icon: TrendingUp }
      ],
      testimonial: "A automação transformou nossa operação. Conseguimos produzir mais com a mesma equipe.",
      author: "João Silva, Gerente de Produção",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      industry: "Metalúrgica Paulista",
      sector: "Metalúrgico", 
      icon: Hammer,
      challenge: "Baixa eficiência e paradas frequentes",
      solution: "Retrofit completo com software de monitoramento",
      results: [
        { metric: "Aumento OEE", value: "50%", icon: TrendingUp },
        { metric: "Payback", value: "14 meses", icon: Clock },
        { metric: "Economia anual", value: "R$ 120k", icon: DollarSign }
      ],
      testimonial: "Superou nossas expectativas. O sistema de monitoramento nos deu total controle da produção.",
      author: "Maria Santos, Diretora Industrial",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      industry: "Têxtil Moderna",
      sector: "Têxtil",
      icon: Building2,
      challenge: "Alto índice de refugo e desperdício",
      solution: "Células robóticas para controle de qualidade",
      results: [
        { metric: "Redução refugo", value: "40%", icon: TrendingDown },
        { metric: "Economia mensal", value: "R$ 8k", icon: DollarSign },
        { metric: "Qualidade", value: "+25%", icon: TrendingUp }
      ],
      testimonial: "A precisão dos robôs eliminou quase todos os defeitos. Nossa qualidade nunca foi tão alta.",
      author: "Carlos Oliveira, Supervisor",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça como empresas como a sua transformaram suas operações com nossas 
            soluções de automação industrial.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${caseItem.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                      <IconComponent className={`w-6 h-6 ${caseItem.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{caseItem.industry}</h3>
                      <p className="text-sm text-gray-500">{caseItem.sector}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Challenge & Solution */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Desafio</h4>
                    <p className="text-sm text-gray-600 mb-4">{caseItem.challenge}</p>
                    
                    <h4 className="font-medium text-gray-900 mb-2">Solução</h4>
                    <p className="text-sm text-gray-600">{caseItem.solution}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Resultados</h4>
                    <div className="space-y-2">
                      {caseItem.results.map((result, idx) => {
                        const ResultIcon = result.icon
                        return (
                          <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <ResultIcon className="w-4 h-4 text-gray-400 mr-2" />
                              <span className="text-sm text-gray-600">{result.metric}</span>
                            </div>
                            <span className="font-semibold text-primary">{result.value}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Quote className="w-4 h-4 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-700 italic mb-2">
                      &ldquo;{caseItem.testimonial}&rdquo;
                    </p>
                    <p className="text-xs text-gray-500">
                      {caseItem.author}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                50+
              </div>
              <div className="text-gray-600 text-sm">
                Projetos Concluídos
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                10+
              </div>
              <div className="text-gray-600 text-sm">
                Anos de Experiência
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                100%
              </div>
              <div className="text-gray-600 text-sm">
                Taxa de Satisfação
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                R$ 2M+
              </div>
              <div className="text-gray-600 text-sm">
                Economia Gerada
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Quer ver sua empresa no próximo case?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Agende uma consulta gratuita e descubra como podemos transformar 
            sua operação industrial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/cases">
                Ver Todos os Cases
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contato">
                Solicitar Consulta Gratuita
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CasesPreview