"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = ["All", "Archive", "Environment", "AI", "Mindstash"]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
