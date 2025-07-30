import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Zap, 
  FileText, 
  RefreshCw, 
  Code, 
  Bot, 
  Monitor,
  ArrowRight 
} from 'lucide-react'

const ServicesPreview = () => {
  const services = [
    {
      icon: Zap,
      title: "Painéis Elétricos",
      description: "Desenvolvimento e montagem de painéis elétricos personalizados para automação industrial.",
      features: ["Projeto customizado", "Normas técnicas", "Teste e comissionamento"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: FileText,
      title: "Esquemas Elétricos",
      description: "Criação de diagramas e esquemas elétricos detalhados usando softwares profissionais.",
      features: ["AutoCAD Electrical", "Normas ABNT", "Documentação completa"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: RefreshCw,
      title: "Retrofit Industrial",
      description: "Modernização de equipamentos existentes para aumentar eficiência e produtividade.",
      features: ["Análise técnica", "Modernização", "Economia de energia"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Code,
      title: "Programação CLP",
      description: "Desenvolvimento de software para controladores lógicos programáveis de diversas marcas.",
      features: ["Siemens", "Allen Bradley", "WEG"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Bot,
      title: "Células Robóticas",
      description: "Implementação de células robotizadas para automatizar processos produtivos.",
      features: ["Análise ROI", "Integração", "Treinamento"],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Monitor,
      title: "Software de Monitoramento",
      description: "Sistema proprietário para monitoramento em tempo real da produção industrial.",
      features: ["Dashboard em tempo real", "Alertas preventivos", "Relatórios automáticos"],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de automação industrial para pequenas e médias empresas, 
            desde o projeto até a implementação e suporte contínuo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="group/btn text-primary hover:text-primary-foreground hover:bg-primary w-full"
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Precisa de uma solução personalizada?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nossa equipe de especialistas pode desenvolver uma solução sob medida 
            para as necessidades específicas da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contato">
                Solicitar Orçamento
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview