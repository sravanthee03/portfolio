import React, { useEffect, useState } from 'react'

const Particles = () => {
  const count = 100
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const temp = []
    for (let i = 0; i < count; i++)
      temp.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: ["small", "medium", "large"][Math.floor(Math.random() * 3)],
        delay: Math.random() * 5,
      })
    setParticles(temp)
  }, [count])

  // Use Tailwind for color
  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle ${p.size} bg-gray-300 dark:bg-white`}
          style={{
            left: p.x,
            top: p.y,
            animationDelay: `${p.delay}s`,
          }}>
        </div>
      ))}
    </div>
  )
}
export default Particles
