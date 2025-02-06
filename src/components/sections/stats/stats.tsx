import React from "react"
import "./stats.scss"

const statsData = [
  { number: "590+", label: "Happy Clients" },
  { number: "18", label: "Years of Service" },
  { number: "2,500+", label: "Cleaning Projects" },
]

const Stats: React.FC = () => {
  return (
    <section className="stats">
      <div className="stats__container container">
        {statsData.map((stat, index) => (
          <div key={index} className="stats__item">
            <span className="stats__item--value">{stat.number}</span>
            <span className="stats__item--name">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
