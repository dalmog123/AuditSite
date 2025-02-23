import type React from "react"
import type { KeyPlayer } from "../types"
import { FaUser } from "react-icons/fa"

const KeyPlayers: React.FC<{ players: KeyPlayer[] }> = ({ players }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {players.map((player, index) => (
        <div key={index} className="bg-white rounded shadow p-4 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center mb-2">
            <FaUser className="text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold">{player.title}</h3>
          </div>
          <p className="text-gray-600">{player.description}</p>
        </div>
      ))}
    </div>
  )
}

export default KeyPlayers

