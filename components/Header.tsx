import type React from "react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onSelfAssessmentClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onSelfAssessmentClick }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    const header = document.querySelector("header")
    if (element && header) {
      const headerHeight = header.getBoundingClientRect().height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg py-4 mb-8">
      <nav className="max-w-4xl mx-auto px-4">
        <ul className="flex flex-wrap gap-4 justify-center items-center">
          <li>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("timeline")}
              className="text-white hover:bg-blue-400"
            >
              מונחים
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("key-players")}
              className="text-white hover:bg-blue-400"
            >
              שחקנים מרכזיים
            </Button>
          </li>
          <li>
            <Button variant="ghost" onClick={() => scrollToSection("faq")} className="text-white hover:bg-blue-400">
              שאלות נפוצות
            </Button>
          </li>
          <li>
            <Button variant="ghost" onClick={() => scrollToSection("summary")} className="text-white hover:bg-blue-400">
              סיכום
            </Button>
          </li>
          <li>
            <Button
              variant="secondary"
              onClick={onSelfAssessmentClick}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              בחן את עצמך
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

