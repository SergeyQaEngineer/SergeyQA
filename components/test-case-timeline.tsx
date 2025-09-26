"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TestCaseTimeline() {
  const timelineEvents = [
    {
      year: "2027",
      title: "Fullstack AQA Engineer",
      company: "План развития",
      description: "Автоматизация тестирования и развитие навыков",
      achievements: ["Автотестирование Selenium + Python", "Уровень знаний SQL: Senior", "Английский язык B2+"],
      status: "future",
      icon: "🚀",
    },
    {
      year: "01.2023 - 08.2025",
      title: "Middle QA Engineer",
      company: "ООО «ЭКСАЙТ КИТ»",
      description: "Тестирование высоконагруженного продукта",
      achievements: ["Изменение тестовой стратегии", "Создание коллекции Postman 5000+ запросов"],
      status: "current",
      icon: "🎯",
    },
    {
      year: "09.2021-01.2023",
      title: "Junior QA Engineer",
      company: 'ООО "Визер"',
      description: "Тестирование платежной системы (карты для проезда, лояльность)",
      achievements: ["Освоение мобильного тестирования", "Написал 200+ тест-кейсов", "Тестирование верстки"],
      status: "completed",
      icon: "🌱",
    },
    {
      year: "2021",
      title: "QA Intern",
      company: "IT Academy",
      description: "Первые шаги в тестировании, обучение",
      achievements: ["Сертификат", "Первый найденный критичный баг"],
      status: "completed",
      icon: "📚",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance text-white">
            {"Путь "}
            <span className="text-purple-400">{"тестировщика"}</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            {"Эволюция от Junior до fullstack AQA Engineer: каждый этап — новый уровень качества"}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-400/30 transform md:-translate-x-0.5" />

          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-center mb-8 sm:mb-12 md:flex-row">
              <div
                className={`absolute left-6 sm:left-8 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full transform -translate-x-1.5 sm:-translate-x-2 md:-translate-x-2 z-10 shadow-lg ${
                  event.status === "current"
                    ? "bg-green-400"
                    : event.status === "future"
                      ? "bg-red-400"
                      : "bg-purple-400"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                    event.status === "current"
                      ? "bg-green-400"
                      : event.status === "future"
                        ? "bg-red-400"
                        : "bg-purple-400"
                  }`}
                />
              </div>

              <Card
                className={`w-full ml-12 sm:ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                } hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-slate-800 border-slate-700`}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl flex-shrink-0">{event.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge
                          variant={event.status === "current" ? "default" : "secondary"}
                          className="bg-purple-600 text-white text-xs"
                        >
                          {event.year}
                        </Badge>
                        {event.status === "current" && (
                          <Badge variant="outline" className="text-emerald-400 border-emerald-400 text-xs">
                            {"Текущая позиция"}
                          </Badge>
                        )}
                        {event.status === "future" && (
                          <Badge variant="outline" className="text-red-400 border-red-400 text-xs">
                            {"План развития"}
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">{event.title}</h3>
                      <p className="text-purple-400 font-semibold mb-2 text-sm sm:text-base">{event.company}</p>
                      <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">{event.description}</p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-xs sm:text-sm text-white">{"Достижения:"}</h4>
                        <ul className="space-y-1">
                          {event.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                              <span className="text-emerald-400 mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
                              <span className="break-words">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-slate-800 rounded-lg border border-slate-700">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400 mb-1">4+</div>
            <div className="text-xs sm:text-sm text-slate-400">{"Лет опыта"}</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-slate-800 rounded-lg border border-slate-700">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400 mb-1">3+</div>
            <div className="text-xs sm:text-sm text-slate-400">{"Проектов"}</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-slate-800 rounded-lg border border-slate-700">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 mb-1">2</div>
            <div className="text-xs sm:text-sm text-slate-400">{"Команды"}</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-slate-800 rounded-lg border border-slate-700">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400 mb-1">∞</div>
            <div className="text-xs sm:text-sm text-slate-400">{"Мотивация"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
