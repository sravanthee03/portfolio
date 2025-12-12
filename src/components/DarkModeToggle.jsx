import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true);


  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [dark])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:scale-105 transition-transform"
      title="Toggle dark/light"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  )
}
