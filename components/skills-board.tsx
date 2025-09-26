"use client"

import { useState } from 'react'

export function SkillsBoard() {
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({})

  const toggleItem = (category: string, skill: string) => {
    const key = `${category}-${skill}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const skills = [
    {
      category: "Тестирование",
      items: [
        {
          name: "Функциональное тестирование",
          description: "тут будет ссылка или описание"
        },
        {
          name: "API тестирование",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Интеграционное тестирование",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Smoke тестирование",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Исследовательское тестирование",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Регрессионное тестирование",
          description: "тут будет ссылка или описание"
        },
      ],
    },
    {
      category: "Инструменты",
      items: [
        {
          name: "Postman",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Swagger",
          description: "тут будет ссылка или описание"
        },
        {
          name: "DevTools",
          description: "тут будет ссылка или описаниее"
        },
        {
          name: "Charles",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Fiddler",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Kibana",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Android Studio+ADB",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Kafka",
          description: "тут будет ссылка или описание"
        },
        {
          name: "PostgreSQL",
          description: "тут будет ссылка или описание"
        },
        {
          name: "ClickHouse",
          description: "тут будет ссылка или описание"
        },
      ],
    },
    {
      category: "Навыки",
      items: [
        {
          name: "Составление тест-кейсов",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Анализ требований",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Поиск и документирование багов",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Оптимизация чек-листа",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Работа в команде",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Внимание к деталям",
          description: "тут будет ссылка или описание"
        },
        {
          name: "Аналитическое мышление",
          description: "тут будет ссылка или описание"
        },
      ],
    },
  ]

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Фоновая сетка как в HeroSection */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary/20" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Навыки и компетенции</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Профессиональные навыки и инструменты для обеспечения качества продукта
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Тестирование - занимает 3 колонки из 12 */}
          <div
            key={skills[0].category}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 lg:col-span-3"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-primary">{skills[0].category}</h3>
            
            <div className="space-y-3">
              {skills[0].items.map((skill) => {
                const itemKey = `${skills[0].category}-${skill.name}`
                const isOpen = openItems[itemKey]
                
                return (
                  <div
                    key={skill.name}
                    className="relative"
                  >
                    <button
                      className="flex items-center justify-between w-full gap-3 p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-black group min-h-[70px] text-left"
                      onClick={() => toggleItem(skills[0].category, skill.name)}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-black" />
                        <span className="text-base sm:text-lg font-semibold leading-tight break-words whitespace-normal flex-1 text-left">
                          {skill.name}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 transition-all duration-300 flex-shrink-0 group-hover:text-black ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div
                      className="accordion-content"
                      data-state={isOpen ? "open" : "closed"}
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="pl-6 pr-3 pb-3">
                        <p className="text-sm text-muted-foreground mt-2 bg-muted/40 p-3 rounded-lg">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Инструменты - занимает 6 колонок из 12 */}
          <div
            key={skills[1].category}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 lg:col-span-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-primary">{skills[1].category}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills[1].items.map((skill) => {
                const itemKey = `${skills[1].category}-${skill.name}`
                const isOpen = openItems[itemKey]
                
                return (
                  <div
                    key={skill.name}
                    className="relative"
                  >
                    <button
                      className="flex items-center justify-between w-full gap-3 p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-black group min-h-[70px] text-left"
                      onClick={() => toggleItem(skills[1].category, skill.name)}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-black" />
                        <span className="text-base sm:text-lg font-semibold leading-tight break-words whitespace-normal flex-1 text-left">
                          {skill.name}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 transition-all duration-300 flex-shrink-0 group-hover:text-black ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div
                      className="accordion-content"
                      data-state={isOpen ? "open" : "closed"}
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="pl-6 pr-3 pb-3">
                        <p className="text-sm text-muted-foreground mt-2 bg-muted/40 p-3 rounded-lg">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Навыки - занимает 3 колонки из 12 */}
          <div
            key={skills[2].category}
            className="bg-background/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 lg:col-span-3"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-primary">{skills[2].category}</h3>
            
            <div className="space-y-3">
              {skills[2].items.map((skill) => {
                const itemKey = `${skills[2].category}-${skill.name}`
                const isOpen = openItems[itemKey]
                
                return (
                  <div
                    key={skill.name}
                    className="relative"
                  >
                    <button
                      className="flex items-center justify-between w-full gap-3 p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-black group min-h-[70px] text-left"
                      onClick={() => toggleItem(skills[2].category, skill.name)}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-black" />
                        <span className="text-base sm:text-lg font-semibold leading-tight break-words whitespace-normal flex-1 text-left">
                          {skill.name}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 transition-all duration-300 flex-shrink-0 group-hover:text-black ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div
                      className="accordion-content"
                      data-state={isOpen ? "open" : "closed"}
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="pl-6 pr-3 pb-3">
                        <p className="text-sm text-muted-foreground mt-2 bg-muted/40 p-3 rounded-lg">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Плавающие элементы как в HeroSection */}
      <div className="hidden sm:block absolute top-20 left-10 text-4xl opacity-20">🧪</div>
      <div className="hidden sm:block absolute top-40 right-20 text-3xl opacity-20">✅</div>
      <div className="hidden sm:block absolute bottom-32 left-20 text-3xl opacity-20">🔍</div>
      <div className="hidden sm:block absolute bottom-20 right-10 text-4xl opacity-20">⚡</div>
    </section>
  )
}