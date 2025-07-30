import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { TrendingDown, TrendingUp, Clock, Headphones } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Redução de 30% nos custos operacionais",
      description: "Otimização de processos e redução de desperdícios resultam em economia significativa nos custos mensais.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: TrendingUp,
      title: "Aumento de 40% na produtividade",
      description: "Automação de tarefas repetitivas e otimização do fluxo produtivo aumentam a eficiência operacional.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "ROI em até 18 meses",
      description: "Retorno rápido do investimento com resultados mensuráveis desde os primeiros meses de implementação.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Headphones,
      title: "Suporte técnico especializado",
      description: "Equipe técnica dedicada para instalação, treinamento e manutenção contínua dos sistemas implantados.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Jamek?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformamos pequenas empresas em operações altamente eficientes com 
            soluções de automação industrial acessíveis e resultados comprovados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                R$ 1.2M+
              </div>
              <div className="text-gray-600">
                Economia gerada para nossos clientes
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">
                50+
              </div>
              <div className="text-gray-600">
                Projetos de automação concluídos
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                95%
              </div>
              <div className="text-gray-600">
                Taxa de satisfação dos clientes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits 