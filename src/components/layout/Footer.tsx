import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram } from 'lucide-react'
import CookieSettings from '@/components/common/CookieSettings'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Painéis Elétricos',
    'Esquemas Elétricos', 
    'Retrofit Industrial',
    'Programação CLP',
    'Células Robóticas',
    'Software de Monitoramento'
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Software', href: '/software' },
    { name: 'Cases', href: '/cases' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Mobile: Stack all sections vertically */}
        <div className="block md:hidden space-y-8">
          {/* Company Info - Mobile First */}
          <div className="text-center">
            <div className="mb-4">
              <div className="text-2xl font-bold text-white mb-1">
                JAMEK
              </div>
              <div className="text-base text-gray-300 mb-4">
                Soluções Industriais
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6 px-2">
              Automação industrial acessível que gera resultados reais para pequenas empresas.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info - Priority on Mobile */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Entre em Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+551199999999" 
                  className="text-gray-300 text-base hover:text-white transition-colors"
                >
                  (11) 99999-9999
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@jamek.com.br" 
                  className="text-gray-300 text-base hover:text-white transition-colors"
                >
                  contato@jamek.com.br
                </a>
              </div>
              
              <div className="flex items-start justify-center space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-base text-center">
                  Rua das Indústrias, 123<br />
                  Vila Industrial<br />
                  São Paulo - SP, 01234-567
                </div>
              </div>
              
              <div className="flex items-start justify-center space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-base text-center">
                  Segunda à Sexta<br />
                  08:00 às 18:00
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid - 2 columns on Mobile */}
          <div className="grid grid-cols-2 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-base font-semibold mb-3 text-center">Páginas</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name} className="text-center">
                    <Link 
                      href={link.href} 
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base font-semibold mb-3 text-center">Serviços</h3>
              <ul className="space-y-2">
                {services.slice(0, 6).map((service) => (
                  <li key={service} className="text-center">
                    <Link 
                      href="/servicos" 
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop: Original Layout Improved */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-bold text-white mb-2">
                JAMEK
              </div>
              <div className="text-sm text-gray-300 mb-4">
                Soluções Industriais
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Automação industrial acessível que gera resultados reais para pequenas empresas. 
              Especialistas em painéis elétricos, retrofit e soluções de monitoramento.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="/servicos" 
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Rua das Indústrias, 123<br />
                  Vila Industrial<br />
                  São Paulo - SP, 01234-567
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+551199999999" 
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  (11) 99999-9999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@jamek.com.br" 
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  contato@jamek.com.br
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Segunda à Sexta<br />
                  08:00 às 18:00
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Jamek Soluções Industriais. Todos os direitos reservados.
            </div>
                         <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm items-center">
               <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors text-center">
                 Política de Privacidade
               </Link>
               <Link href="/termos" className="text-gray-400 hover:text-white transition-colors text-center">
                 Termos de Uso
               </Link>
               <CookieSettings />
             </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 