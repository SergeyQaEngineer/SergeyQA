"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BugHuntSection() {
  const [foundBugs, setFoundBugs] = useState<number[]>([])

  const bugs = [
    { id: 1, severity: "critical", description: "Null pointer exception", position: "top-10 left-20" },
    { id: 2, severity: "major", description: "Memory leak", position: "top-32 right-16" },
    { id: 3, severity: "minor", description: "UI misalignment", position: "bottom-20 left-32" },
    { id: 4, severity: "critical", description: "Security vulnerability", position: "bottom-32 right-20" },
  ]

  const handleBugClick = (bugId: number) => {
    if (!foundBugs.includes(bugId)) {
      setFoundBugs([...foundBugs, bugId])
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500"
      case "major":
        return "bg-orange-500"
      case "minor":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {"Охота на "}
            <span className="text-primary">{"баги"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Интерактивная демонстрация моих навыков. Найдите все баги на экране!"}
          </p>
        </div>

        {/* Игровое поле */}
        <div className="relative h-96 bg-background rounded-lg border-2 border-dashed border-primary/30 mb-8 overflow-hidden">
          <div className="absolute inset-0 code-scan opacity-30" />

          {/* Код-подобный фон */}
          <div className="absolute inset-0 p-4 font-mono text-xs text-muted-foreground/30 leading-relaxed">
            <div>{"function validateUser(user) {"}</div>
            <div className="ml-4">{"if (user.name === null) {"}</div>
            <div className="ml-8 text-red-400">{"// BUG: Null pointer exception"}</div>
            <div className="ml-8">{"return user.name.toLowerCase();"}</div>
            <div className="ml-4">{"}"}</div>
            <div>{"}"}</div>
            <div className="mt-4">{"const users = [];"}</div>
            <div>{"while (true) {"}</div>
            <div className="ml-4 text-orange-400">{"// BUG: Memory leak"}</div>
            <div className="ml-4">{"users.push(new User());"}</div>
            <div>{"}"}</div>
          </div>

          {/* Баги для поиска */}
          {bugs.map((bug) => (
            <button
              key={bug.id}
              onClick={() => handleBugClick(bug.id)}
              className={`absolute ${bug.position} transform transition-all duration-300 ${
                foundBugs.includes(bug.id) ? "scale-0 opacity-0" : "hover:scale-110 animate-pulse"
              }`}
            >
              <div className={`w-4 h-4 rounded-full ${getSeverityColor(bug.severity)} shadow-lg`} />
            </button>
          ))}
        </div>

        {/* Статистика охоты */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-primary mb-2">
                {foundBugs.length}/{bugs.length}
              </div>
              <div className="text-muted-foreground">{"Найдено багов"}</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-secondary mb-2">
                {Math.round((foundBugs.length / bugs.length) * 100)}%
              </div>
              <div className="text-muted-foreground">{"Прогресс"}</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="text-3xl font-bold text-accent mb-2">
                {foundBugs.length === bugs.length ? "🏆" : "🎯"}
              </div>
              <div className="text-muted-foreground">{foundBugs.length === bugs.length ? "Мастер!" : "В процессе"}</div>
            </CardContent>
          </Card>
        </div>

        {/* Найденные баги */}
        {foundBugs.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">{"Найденные баги:"}</h3>
            <div className="flex flex-wrap gap-2">
              {foundBugs.map((bugId) => {
                const bug = bugs.find((b) => b.id === bugId)
                return bug ? (
                  <Badge key={bugId} variant="outline" className="px-3 py-1">
                    <span className={`w-2 h-2 rounded-full ${getSeverityColor(bug.severity)} mr-2`} />
                    {bug.description}
                  </Badge>
                ) : null
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
