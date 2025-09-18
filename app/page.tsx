import { HeroSection } from "@/components/hero-section"
import { SkillsBoard } from "@/components/skills-board"
import { TestCaseTimeline } from "@/components/test-case-timeline"
import { ContactSection } from "@/components/contact-section" // добавлен импорт контактов

export default function QAEngineerLanding() {
  return (
    <main className="min-h-screen theme-transition">
      <div className="green-section">
        <HeroSection />
      </div>

      <div className="transition-section">
        <SkillsBoard />
      </div>

      <div className="purple-section">
        <TestCaseTimeline />
      </div>

      <ContactSection />
    </main>
  )
}
