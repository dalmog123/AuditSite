"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"

interface Question {
  id: number
  question: string
  answer: string
}

interface GlossaryItem {
  term: string
  definition: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "מהי בקרה פנימית, ומהי מטרתה העיקרית בארגון על פי מודל COSO?",
    answer:
      "בקרה פנימית היא תהליך המכוון על ידי החברה במטרה לספק ביטחון סביר להשגת אפקטיביות ויעילות תפעולית, מהימנות הדיווח הכספי ועמידה בדרישות החוק. מטרתה העיקרית היא לסייע לעסקים לאמוד ולהעצים את מערכות הבקרה הפנימית אצלם.",
  },
  {
    id: 2,
    question: "הסבירו את ההבדל בין סיכון מובנה לסיכון בקרה בביקורת.",
    answer:
      "סיכון מובנה הוא הסיכון שטבוע בסעיף עצמו, לדוגמה סעיף עם אומדנים, וקיים לפני ביצוע הביקורת. סיכון בקרה הוא הסיכון שהצגה מוטעית מהותית לא תמנע במועד או לא תזוהה ותתוקן על ידי הבקרה הפנימית.",
  },
  {
    id: 3,
    question: "מהי מהותיות (M) לדוחות כספיים בכללותם, וכיצד היא נקבעת?",
    answer:
      "מהותיות לדוחות כספיים בכללותם היא סף מעליו הדוח ייחשב מוטעה מהותית. היא נקבעת על ידי קביעת נקודת ייחוס (כמו רווח לפני מס) והכפלתה בשיעור מתאים (למשל 3-10% מהרווח לפני מס).",
  },
  {
    id: 4,
    question: "תארו שלושה נהלי ביקורת אנליטיים, וציינו באיזה שלב של הביקורת משתמשים בהם.",
    answer:
      "שלושה נהלים אנליטיים הם השוואה לתקופות קודמות, השוואה לתוצאות חזויות והשוואה למידע ענפי דומה. הם משמשים בשלב תכנון הביקורת, בשלב הבדיקות המבססות ובסוף הביקורת.",
  },
  {
    id: 5,
    question: "מהן בקרות IT כלליות (ITGC), ותנו שתי דוגמאות לבקרות אלה?",
    answer:
      "בקרות IT כלליות הן בקרות ברמת העל הנוגעות להתוויית מדיניות מערכות מידע בחברה. שתי דוגמאות: אסטרטגיית IT לטווח קצר וארוך המדווחת להנהלה הבכירה וניהול הרשאות והפרדת תפקידים במערכות החברה.",
  },
]

const glossaryItems: GlossaryItem[] = [
  {
    term: "בקרה פנימית (Internal Control)",
    definition:
      "תהליך המבוצע על ידי הדירקטוריון, ההנהלה ועובדים אחרים בארגון, שמטרתו לספק ביטחון סביר להשגת יעדים בתחומים של אפקטיביות ויעילות תפעולית, מהימנות הדיווח הכספי ועמידה בדרישות החוק.",
  },
  {
    term: "סיכון מובנה (Inherent Risk)",
    definition:
      "הסיכון להצגה מוטעית מהותית ברמת המצג, הנובע מאופי החשבון, העסקה או הגילוי, לפני התחשבות בבקרות הפנימיות של הארגון.",
  },
  {
    term: "סיכון בקרה (Control Risk)",
    definition:
      "הסיכון שהצגה מוטעית מהותית, שעלולה להתרחש ברמת המצג, לא תימנע או תתגלה על ידי הבקרות הפנימיות של הארגון.",
  },
  {
    term: "מהותיות (Materiality)",
    definition: "סף שמעליו טעות או השמטה במידע הכספי עלולה להשפיע על החלטות כלכליות של משתמשי הדוחות הכספיים.",
  },
  {
    term: "נהלים אנליטיים (Analytical Procedures)",
    definition: "הערכות של מידע כספי שנעשות באמצעות בחינת קשרים סבירים בין נתונים כספיים ולא כספיים.",
  },
  {
    term: "בדיקות מבססות (Substantive Tests)",
    definition: "נהלי ביקורת שמטרתם לזהות הצגות מוטעות מהותיות ברמת המצגים הכספיים.",
  },
  {
    term: "בדיקות בקרה (Tests of Controls)",
    definition: "נהלי ביקורת שמטרתם להעריך את האפקטיביות התפעולית של הבקרות הפנימיות של הארגון.",
  },
  {
    term: "ITGC (Information Technology General Controls)",
    definition:
      "בקרות כלליות במערכות המידע שמטרתן להבטיח את הפעולה התקינה של מערכות המידע ואת אמינות הנתונים המעובדים בהן.",
  },
]

const QuestionCard: React.FC<{
  question: Question
  showGlossary: boolean
}> = ({ question, showGlossary }) => {
  const [userAnswer, setUserAnswer] = useState("")
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <Card className="p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4 text-right">שאלה {question.id}</h3>
      <p className="mb-6 text-right">{question.question}</p>
      <Textarea
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="הקלד את תשובתך כאן"
        className="mb-6 text-right min-h-[100px]"
      />
      <div className="flex justify-end">
        <Button onClick={() => setShowAnswer(!showAnswer)} variant={showAnswer ? "outline" : "default"}>
          {showAnswer ? "הסתר תשובה" : "הצג תשובה"}
        </Button>
      </div>
      {showAnswer && (
        <div className="mt-6 p-4 bg-blue-100 rounded-lg">
          <h4 className="font-semibold text-right mb-2">תשובה:</h4>
          <p className="text-right">{question.answer}</p>
        </div>
      )}
    </Card>
  )
}

const SelfAssessment: React.FC = () => {
  const [showGlossary, setShowGlossary] = useState(false)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-right">בחן את עצמך</h2>
        <Button variant="outline" onClick={() => setShowGlossary(!showGlossary)}>
          {showGlossary ? "הסתר מילון מונחים" : "הצג מילון מונחים"}
        </Button>
      </div>

      {showGlossary && (
        <Card className="mb-8 p-6">
          <h3 className="text-xl font-semibold mb-4 text-right">מילון מונחים</h3>
          <ScrollArea className="h-[300px]" dir="rtl">
            <div className="space-y-4">
              {glossaryItems.map((item, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0" dir="rtl">
                  <h4 className="font-semibold text-right mb-2">{item.term}</h4>
                  <p className="text-right text-gray-600">{item.definition}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      )}

      <div className="space-y-6">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} showGlossary={showGlossary} />
        ))}
      </div>
    </div>
  )
}

export default SelfAssessment

