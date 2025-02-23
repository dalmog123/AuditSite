"use client"

import type React from "react"

import { useState } from "react"
import type { SummaryItem } from "../types"

const Summary: React.FC<{ items: SummaryItem[] }> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0].id)

  return (
    <div className="w-full" dir="rtl">
      <div className="mb-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === item.id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        {items.map(
          (item) =>
            item.id === activeTab && (
              <div key={item.id}>
                <h3 className="text-xl font-semibold mb-4 text-right">{item.title}</h3>
                <p className="mb-4 font-medium text-right">{item.summary}</p>
                <ul className="list-disc list-inside space-y-2 text-right">
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ),
        )}
      </div>
    </div>
  )
}

export default Summary

