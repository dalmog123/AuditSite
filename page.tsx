"use client"

import { useState } from "react"
import Header from "./components/Header"
import Timeline from "./components/Timeline"
import KeyPlayers from "./components/KeyPlayers"
import FAQ from "./components/FAQ"
import Summary from "./components/Summary"
import SelfAssessment from "./components/SelfAssessment"
import { Button } from "@/components/ui/button"
import { timelineData } from "./data/timelineData"
import { keyPlayersData } from "./data/keyPlayersData"
import { faqData } from "./data/faqData"
import { summaryData } from "./data/summaryData"
import Podcast from "./components/Podcast"

export default function Page() {
  const [showSelfAssessment, setShowSelfAssessment] = useState(false)

  const handleSelfAssessmentClick = () => {
    setShowSelfAssessment(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100" dir="rtl">
        <Header onSelfAssessmentClick={handleSelfAssessmentClick} />
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {!showSelfAssessment ? (
              <>
                <section id="main" className="mb-16">
                  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">ביקורת חשבונות</h1>
                  <p className="text-lg text-center text-gray-600">
                    סקירה של מושגים מרכזיים בתחום הבקרה הפנימית והביקורת
                  </p>
                </section>

                <section id="timeline" className="mb-16">
                  <Timeline items={timelineData} />
                </section>

                <section id="key-players" className="mb-16">
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    שחקנים מרכזיים בתחום הבקרה הפנימית והביקורת
                  </h2>
                  <KeyPlayers players={keyPlayersData} />
                </section>

                <section id="faq" className="mb-16">
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    שאלות נפוצות בנושא ביקורת פנימית וחשבונות
                  </h2>
                  <FAQ items={faqData} />
                </section>

                <section id="summary" className="mb-16">
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">סיכום תמציתי של ביקורת חשבונות</h2>
                  <Summary items={summaryData} />
                </section>
              </>
            ) : (
              <section id="self-assessment">
                <Button onClick={() => setShowSelfAssessment(false)} className="mb-6" variant="outline">
                  חזרה לעמוד הראשי
                </Button>
                <SelfAssessment />
              </section>
            )}
          </div>
        </div>
      </div>
      <Podcast />
    </>
  )
}

