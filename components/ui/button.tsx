import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, variant = "default", size = "default", className, ...props }) => {
  let buttonClass =
    "rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  switch (variant) {
    case "default":
      buttonClass += " bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
      break
    case "outline":
      buttonClass += " border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-500"
      break
  }

  switch (size) {
    case "sm":
      buttonClass += " px-2 py-1 text-sm"
      break
    case "lg":
      buttonClass += " px-4 py-3 text-lg"
      break
    default:
      buttonClass += " px-3 py-2 text-base"
      break
  }

  buttonClass += ` ${className || ""}`

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export { Button }

