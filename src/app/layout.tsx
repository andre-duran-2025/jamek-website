import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import GoogleAnalytics from "@/components/common/GoogleAnalytics"
import CookieBanner from "@/components/common/CookieBanner"
import SchemaMarkup from "@/components/common/SchemaMarkup"
import ReCaptcha from "@/components/common/ReCaptcha"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "Jamek - Soluções Industriais | Automação para Pequenas Empresas",
  description: "Automação industrial acessível que gera resultados reais para pequenas empresas. Painéis elétricos, retrofit, programação CLP e software de monitoramento.",
  keywords: "automação industrial, painéis elétricos, retrofit industrial, programação CLP, células robóticas, software monitoramento industrial",
  authors: [{ name: "Jamek Soluções Industriais" }],
  creator: "Jamek Soluções Industriais",
  publisher: "Jamek Soluções Industriais",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jamek.com.br",
    title: "Jamek - Soluções Industriais | Automação para Pequenas Empresas",
    description: "Automação industrial acessível que gera resultados reais para pequenas empresas",
    siteName: "Jamek Soluções Industriais",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamek - Soluções Industriais",
    description: "Automação industrial acessível que gera resultados reais para pequenas empresas",
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <SchemaMarkup type="organization" />
        <SchemaMarkup type="localBusiness" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ReCaptcha siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}