"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  onSelfAssessmentClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onSelfAssessmentClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
      <nav className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-14 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-blue-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          <Button
            variant="secondary"
            onClick={onSelfAssessmentClick}
            className="bg-white text-blue-600 hover:bg-blue-50 text-base"
          >
            בחן את עצמך
          </Button>
        </div>
        
        <ul className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-stretch md:items-center py-4 md:py-2`}>
          <li className="w-full md:w-auto">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("timeline")}
              className="text-white hover:bg-blue-400 w-full md:w-auto text-base"
            >
              מונחים
            </Button>
          </li>
          <li className="w-full md:w-auto">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("key-players")}
              className="text-white hover:bg-blue-400 w-full md:w-auto text-base"
            >
              שחקנים מרכזיים
            </Button>
          </li>
          <li className="w-full md:w-auto">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("faq")} 
              className="text-white hover:bg-blue-400 w-full md:w-auto text-base"
            >
              שאלות נפוצות
            </Button>
          </li>
          <li className="w-full md:w-auto">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection("summary")} 
              className="text-white hover:bg-blue-400 w-full md:w-auto text-base"
            >
              סיכום
            </Button>
          </li>
          <li className="w-full md:w-auto">
            <Button
              variant="secondary"
              onClick={onSelfAssessmentClick}
              className="bg-white text-blue-600 hover:bg-blue-50 w-full text-base hidden md:inline-flex"
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

