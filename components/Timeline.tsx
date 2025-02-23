import React from "react"
import type { TimelineItem } from "../types"
import type { IconType } from "react-icons"
import {
  FaClipboardCheck,
  FaUserTie,
  FaChartLine,
  FaFileAlt,
  FaExchangeAlt,
  FaSearchPlus,
  FaLock,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
  FaBalanceScale,
  FaUsers,
} from "react-icons/fa"

const iconMap: { [key: string]: IconType } = {
  control: FaClipboardCheck,
  audit: FaUserTie,
  risk: FaChartLine,
  report: FaFileAlt,
  communication: FaExchangeAlt,
  monitoring: FaSearchPlus,
  security: FaLock,
  it: FaDatabase,
  cloud: FaCloud,
  cybersecurity: FaShieldAlt,
  finance: FaMoneyBillWave,
  inventory: FaWarehouse,
  assets: FaBuilding,
  legal: FaBalanceScale,
  hr: FaUsers,
}

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gray-300"></div>
      {items.map((item, index) => (
        <div key={index} className={`mb-8 flex justify-${index % 2 === 0 ? "start" : "end"} items-center w-full`}>
          <div className={`w-5/12 ${index % 2 === 0 ? "text-left" : "order-1 text-right"}`}>
            <div className="p-4 bg-white rounded shadow hover:shadow-md transition-shadow duration-300">
              {React.createElement(iconMap[item.icon], { className: "inline-block ml-2 text-blue-500" })}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
          <div className="absolute right-1/2 transform translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
        </div>
      ))}
    </div>
  )
}

export default Timeline

