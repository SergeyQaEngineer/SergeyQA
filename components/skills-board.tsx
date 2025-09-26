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
          description: "описание"
        },
        {
          name: "API тестирование",
          description: "описание"
        },
        {
          name: "Интеграционное тестирование",
          description: "описание"
        },
        {
          name: "Smoke тестирование",
          description: "описание"
        },
        {
          name: "Исследовательское тестирование",
          description: "описание"
        },
        {
          name: "Регрессионное тестирование",
          description: "описание"
        },
      ],
    },
    {
      category: "Инструменты",
      items: [
        {
          name: "Postman",
          description: "описание"
        },
        {
          name: "Swagger",
          description: "описание"
        },
        {
          name: "DevTools",
          description: "описание"
        },
        {
          name: "Charles",
          description: "описание"
        },
        {
          name: "Fiddler",
          description: "описание"
        },
        {
          name: "Kibana",
          description: "описание"
        },
        {
          name: "Android Studio+ADB",
          description: "описание"
        },
        {
          name: "Kafka",
          description: "описание"
        },
        {
          name: "PostgreSQL",
          description: "описание"
        },
        {
          name: "ClickHouse",
          description: "описание"
        },
      ],
    },
    {
      category: "Навыки",
      items: [
        {
          name: "Составление тест-кейсов",
          description: "описание"
        },
        {
          name: "Анализ требований",
          description: "описание"
        },
        {
          name: "Поиск и документирование багов",
          description: "описание"
        },
        {
          name: "Оптимизация чек-листа",
          description: "описание"
        },
        {
          name: "Работа в команде",
          description: "описание"
        },
        {
          name: "Внимание к деталям",
          description: "описание"
        },
        {
          name: "Аналитическое мышление",
          description: "описание"
        },
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Навыки и компетенции</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Профессиональные навыки и инструменты для обеспечения качества продукта
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"> {/* Увеличил max-w до 7xl */}
          {/* Тестирование - занимает 1 колонку на десктопе */}
          <div
            key={skills[0].category}
            className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 lg:col-span-1"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">{skills[0].category}</h3>
            
            <div className="flex flex-col gap-2">
              {skills[0].items.map((skill) => {
                const itemKey = `${skills[0].category}-${skill.name}`
                const isOpen = openItems[itemKey]
                
                return (
                  <div
                    key={skill.name}
                    className="relative"
                  >
                    <div
                      className="flex items-center justify-between gap-3 p-2 sm:p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-black group min-h-[60px] sm:min-h-[50px]" // Добавил минимальную высоту
                      onClick={() => toggleItem(skills[0].category, skill.name)}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-black" />
                        <span className="text-lg sm:text-base font-medium break-words whitespace-normal text-left flex-1"> {/* Убрал truncate, добавил перенос */}
                          {skill.name}
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 transition-all duration-300 flex-shrink-0 group-hover:text-black ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    <div
                      className="accordion-content"
                      data-state={isOpen ? "open" : "closed"}
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="pl-5 pr-2 pb-2">
                        <p className="text-sm text-muted-foreground mt-1 bg-muted/30 p-2 rounded-lg"> {/* Исправил text-xm на text-sm */}
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Инструменты - занимает 2 колонки на десктопе */}
          <div
            key={skills[1].category}
            className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 lg:col-span-2"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">{skills[1].category}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skills[1].items.map((skill) => {
                const itemKey = `${skills[1].category}-${skill.name}`
                const isOpen = openItems[itemKey]
                
                return (
                  <div
                    key={skill.name}
                    className="relative"
                  >
                    <div
                      className="flex items-center justify-between gap-3 p-2 sm:p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-black group min-h-[60px] sm:min-h-[50px]" // Добавил минимальную высоту
                      onClick={() => toggleItem(skills[1].category, skill.name)}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-black" />
                        <span className="text-lg sm:text-base font-medium break-words whitespace-normal text-left flex-1"> {/* Убрал truncate, добавил перенос */}
                          {skill.name}
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 transition-all duration-300 flex-shrink-0 group-hover:text-black ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    <div
                      className="accordion-content"
                      data-state={isOpen ? "open" : "closed"}
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="pl-5 pr-2 pb-2">
                        <p className="text-sm text-muted-foreground mt-1 bg-muted/30 p-2 rounded-lg"> {/* Исправил text-xm на text-sm */}
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Навыки - занимает 1 колонку на десктопе */}
          <div
            key={skills[2].category}
            className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 lg:col-span-1"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">{skills[2].category}</h3>
            
            <div className="flex flex-col gap-2">
              {skills[2].items.map((skill) => {
                const itemKey = `${skills[2].category}-${skill.name}`
                const isOpen = openItems[itemKey]
                
                return (
                  <div
                    key={skill.name}
                    className="relative"
                  >
                    <div
                      className="flex items-center justify-between gap-3 p-2 sm:p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-green-500 hover:text-black group min-h-[60px] sm:min-h-[50px]" // Добавил минимальную высоту
                      onClick={() => toggleItem(skills[2].category, skill.name)}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 transition-colors duration-300 group-hover:bg-black" />
                        <span className="text-lg sm:text-base font-medium break-words whitespace-normal text-left flex-1"> {/* Убрал truncate, добавил перенос */}
                          {skill.name}
                        </span>
                      </div>
                      <svg
                        className={`w-4 h-4 transition-all duration-300 flex-shrink-0 group-hover:text-black ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    
                    <div
                      className="accordion-content"
                      data-state={isOpen ? "open" : "closed"}
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="pl-5 pr-2 pb-2">
                        <p className="text-sm text-muted-foreground mt-1 bg-muted/30 p-2 rounded-lg"> {/* Исправил text-xm на text-sm */}
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
    </section>
  )
}