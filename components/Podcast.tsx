"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

const Podcast = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!audioRef.current) return
    
    const audio = audioRef.current
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration))
    audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime))

    return () => {
      audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration))
      audio.removeEventListener('timeupdate', () => setCurrentTime(audio.currentTime))
    }
  }, [])

  const handlePlay = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current) return

    const rect = progressBarRef.current.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const newTime = percent * duration
    
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 z-[9999]">
      <div className="max-w-3xl mx-auto flex items-center gap-6">
        {/* Play/Pause Button (moved to left) */}
        <button
          onClick={handlePlay}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-1" />
          )}
        </button>

        {/* Current Time (moved to right of play button) */}
        <span className="text-sm font-medium text-gray-600 w-12">
          {formatTime(currentTime)}
        </span>

        {/* Progress Bar */}
        <div className="flex-1 h-16 flex items-center relative">
          <div
            ref={progressBarRef}
            onClick={handleTimelineClick}
            className="w-full h-1 bg-gray-200 rounded-full cursor-pointer relative"
          >
            {/* Progress Fill */}
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            {/* Progress Handle */}
            <div
              className="absolute top-1/2 -mt-2 -ml-2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-md transform scale-100 hover:scale-110 transition-transform"
              style={{ left: `${(currentTime / duration) * 100}%` }}
            />
          </div>
        </div>

        {/* Total Duration (moved to right) */}
        <span className="text-sm font-medium text-gray-600 w-12 text-right">
          {formatTime(duration)}
        </span>

        <audio
          ref={audioRef}
          src="/Sound/Internal Control and Auditing Procedures_ A Comprehensive Guide.mp3"
          preload="metadata"
        />
      </div>
    </div>
  )
}

export default Podcast
