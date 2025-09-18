"use client"

export function SkillsBoard() {
  const skills = [
    {
      category: "Тестирование",
      items: [
        "Функциональное тестирование",
        "API тестирование",
        "Интеграционное тестирование",
        "Smoke тестирование",
        "Исследовательское тестирование",
        "Регрессионное тестирование",
      ],
    },
    {
      category: "Инструменты",
      items: [
        "Postman",
        "Swagger",
        "DevTools",
        "Charles",
        "Fiddler",
        "Kibana",
        "Android Studio+ADB",
        "Kafka",
        "PostgreSQL",
        "ClickHouse",
      ],
    },
    {
      category: "Навыки",
      items: [
        "Составление тест-кейсов",
        "Анализ требований",
        "Поиск и документирование багов",
        "Оптимизация чек-листа", // добавлен новый навык
        "Работа в команде",
        "Внимание к деталям",
        "Аналитическое мышление",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">{skillGroup.category}</h3>
              <div
                className={`space-y-2 sm:space-y-3 ${skillGroup.category === "Инструменты" ? "grid grid-cols-2 gap-2 space-y-0" : ""}`}
              >
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
