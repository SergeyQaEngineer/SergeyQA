"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function HeroSection() {
  const [currentTest, setCurrentTest] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const testCases = [
    "✓ API тестирование",
    "✓ Функциональное тестирование",
    "✓ Интеграционное тестирование",
    "✓ Smoke тестирование",
    "✓ Исследовательское тестирование",
    "✓ Регрессионное тестирование",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTest((prev) => (prev + 1) % testCases.length)
      setIsTyping(false)
      setTimeout(() => setIsTyping(true), 100)
    }, 2000)
    return () => clearInterval(interval)
  }, [testCases.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновая сетка как тестовая матрица */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary/20" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Левая колонка с текстом */}
          <div className="text-center lg:text-left">
            {/* Статус бейдж */}
            <div className="mb-6 lg:mb-8 flex justify-center lg:justify-start">
              <Badge
                variant="outline"
                className="px-3 py-2 text-xs sm:text-sm font-mono bg-primary/10 border-primary/30"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                {"STATUS: READY FOR TESTING"}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-balance">
              <span className="text-foreground">Сергей Сафронов</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-primary">QA Engineer</h2>

            {/* Подзаголовок с анимацией печати */}
            <div className="mb-6 lg:mb-8 h-12 sm:h-16 flex items-center justify-center lg:justify-start">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-mono">
                <span className="text-primary">{">"}</span>
                <span className={`ml-2 ${isTyping ? "border-r-2 border-primary animate-pulse" : ""}`}>
                  {testCases[currentTest]}
                </span>
              </p>
            </div>

            {/* Описание */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed px-2 sm:px-4 lg:px-0">
              {"Превращаю баги в фичи, хаос в порядок, а код в качественный продукт. "}
              <span className="text-primary font-semibold">{"Каждый тест — это шаг к совершенству."}</span>
            </p>
          </div>

          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Декоративная рамка */}
              <div className="absolute -inset-3 lg:-inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-primary/20">
                <Image
                  src="/face.png"
                  alt="Сергей Сафронов - QA Engineer"
                  width={300}
                  height={350}
                  className="rounded-xl object-cover w-full max-w-[300px] lg:max-w-[350px]"
                />
                {/* Плавающие индикаторы тестов */}
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                  ✓ PASSED
                </div>
                <div className="absolute -bottom-2 -left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  🔍 TESTING
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Плавающие элементы */}
      <div className="hidden sm:block absolute top-20 left-10 text-4xl opacity-20">🔍</div>
      <div className="hidden sm:block absolute top-40 right-20 text-3xl opacity-20">✅</div>
      <div className="hidden sm:block absolute bottom-32 left-20 text-3xl opacity-20">⚡</div>
      <div className="hidden sm:block absolute bottom-20 right-10 text-4xl opacity-20">🧪</div>
    </section>
  )
}
