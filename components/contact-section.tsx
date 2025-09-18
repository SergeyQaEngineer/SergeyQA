"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageCircle, Github, Download } from "lucide-react"

export function ContactSection() {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent)) {
      window.location.href = "tel:+79166777882"
    }
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/79166777882", "_blank")
  }

  const handleTelegramClick = () => {
    window.open("https://t.me/Serg_sss3", "_blank")
  }

  const handleGithubClick = () => {
    window.open("https://github.com/SergeyQaEngineer", "_blank")
  }

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Sergey_QA_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Контакты</h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Готов к новым вызовам и интересным проектам
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Email как настоящая ссылка mailto */}
          <a 
            href="mailto:mantana_90@mail.ru"
            className="flex items-center justify-center px-4 py-2 border border-slate-600 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition-colors min-h-[44px] no-underline"
          >
            <Mail className="w-5 h-5 mr-2" />
            <span className="text-sm sm:text-base">mantana_90@mail.ru</span>
          </a>

          <Button
            onClick={handlePhoneClick}
            variant="outline"
            size="lg"
            className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:border-slate-500"
          >
            <Phone className="w-5 h-5 mr-2" />
            Телефон
          </Button>

          <Button
            onClick={handleTelegramClick}
            variant="outline"
            size="lg"
            className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:border-slate-500"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Telegram
          </Button>

          <Button
            onClick={handleWhatsAppClick}
            variant="outline"
            size="lg"
            className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:border-slate-500"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>

          <Button
            onClick={handleGithubClick}
            variant="outline"
            size="lg"
            className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:border-slate-500"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>

          <Button 
            onClick={handleResumeDownload} 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
          >
            <Download className="w-5 h-5 mr-2" />
            Скачать резюме
          </Button>
        </div>
      </div>
    </section>
  )
}