"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function QualityMetrics() {
  const metrics = [
    {
      title: "Покрытие тестами",
      value: 95,
      target: 95,
      unit: "%",
      status: "excellent",
      description: "Процент кода, покрытого автотестами",
    },
    {
      title: "Время выполнения тестов",
      value: 15,
      target: 20,
      unit: "мин",
      status: "good",
      description: "Среднее время полного прогона тестов",
    },
    {
      title: "Найдено багов",
      value: 47,
      target: 50,
      unit: "шт",
      status: "good",
      description: "Количество найденных дефектов за месяц",
    },
    {
      title: "Стабильность тестов",
      value: 98,
      target: 95,
      unit: "%",
      status: "excellent",
      description: "Процент стабильно проходящих тестов",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "text-green-500"
      case "good":
        return "text-blue-500"
      case "warning":
        return "text-yellow-500"
      case "critical":
        return "text-red-500"
      default:
        return "text-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return "🟢"
      case "good":
        return "🔵"
      case "warning":
        return "🟡"
      case "critical":
        return "🔴"
      default:
        return "⚪"
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {"Метрики "}
            <span className="text-primary">{"качества"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Данные в реальном времени о качестве тестирования и производительности"}
          </p>
        </div>

        {/* Основные метрики */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-lg">
                  <span>{metric.title}</span>
                  <span className="text-xl">{getStatusIcon(metric.status)}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${getStatusColor(metric.status)}`}>{metric.value}</span>
                  <span className="text-lg text-muted-foreground">{metric.unit}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{"Цель:"}</span>
                    <span className="font-mono">
                      {metric.target}
                      {metric.unit}
                    </span>
                  </div>
                  <Progress value={(metric.value / metric.target) * 100} className="h-2" />
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дашборд тестирования */}
        <Card className="p-8 bg-card">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">{"Дашборд тестирования"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Статус тестов */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">{"Статус тестов"}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      {"Пройдено"}
                    </span>
                    <span className="font-mono">847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      {"Провалено"}
                    </span>
                    <span className="font-mono">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                      {"Пропущено"}
                    </span>
                    <span className="font-mono">5</span>
                  </div>
                </div>
              </div>

              {/* Типы тестов */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">{"Типы тестов"}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>{"Unit тесты"}</span>
                    <span className="font-mono">456</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{"Integration"}</span>
                    <span className="font-mono">234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{"E2E тесты"}</span>
                    <span className="font-mono">174</span>
                  </div>
                </div>
              </div>

              {/* Последние результаты */}
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">{"Последний прогон"}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>{"Время выполнения"}</span>
                    <span className="font-mono">{"14:32"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{"Успешность"}</span>
                    <span className="font-mono text-green-500">{"98.6%"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{"Последнее обновление"}</span>
                    <span className="font-mono text-xs">{"2 мин назад"}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
