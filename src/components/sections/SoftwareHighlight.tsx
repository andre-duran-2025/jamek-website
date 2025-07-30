import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  BarChart3, 
  Bell, 
  FileText, 
  Smartphone, 
  ArrowRight,
  Monitor,
  TrendingUp,
  Clock
} from 'lucide-react'

const SoftwareHighlight = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Dashboard em Tempo Real",
      description: "Visualize métricas de produção, eficiência e indicadores em tempo real"
    },
    {
      icon: Bell,
      title: "Alertas Preventivos",
      description: "Receba notificações automáticas antes que problemas afetem a produção"
    },
    {
      icon: FileText,
      title: "Relatórios Automáticos",
      description: "Relatórios diários e semanais gerados automaticamente"
    },
    {
      icon: Smartphone,
      title: "Acesso Mobile",
      description: "Monitore sua produção de qualquer lugar pelo smartphone"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium mb-6">
              <Monitor className="w-4 h-4 mr-2" />
              Inovação Exclusiva Jamek
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Software de{' '}
              <span className="text-primary">Monitoramento Industrial</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nossa solução proprietária oferece visibilidade completa da sua operação 
              com dashboard intuitivo, alertas preventivos e análises preditivas.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700">Aumento de 25% na eficiência operacional</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">Redução de 40% no tempo de setup</span>
              </div>
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-orange-600 mr-3" />
                <span className="text-gray-700">Prevenção de 90% das paradas não programadas</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/software">
                  Conheça nossa inovação
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Solicitar Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Software Preview */}
          <div className="relative">
            {/* Main Dashboard Mockup */}
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Dashboard Industrial - Jamek</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Dashboard Content */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">OEE Atual</div>
                    <div className="text-2xl font-bold text-green-600">87.5%</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Produção/Hora</div>
                    <div className="text-2xl font-bold text-blue-600">142 un</div>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="bg-gray-50 h-32 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-gray-500 text-sm">Gráfico de Produção em Tempo Real</div>
                </div>
                
                {/* Recent Alerts */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900">Alertas Recentes</div>
                  <div className="flex items-center p-2 bg-yellow-50 rounded text-xs">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    Manutenção preventiva em 2 dias
                  </div>
                  <div className="flex items-center p-2 bg-green-50 rounded text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Meta de produção atingida
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center">
                <BarChart3 className="w-4 h-4 text-primary mr-2" />
                <span className="text-xs font-medium">Real-time</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center">
                <Smartphone className="w-4 h-4 text-secondary mr-2" />
                <span className="text-xs font-medium">Mobile Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SoftwareHighlight