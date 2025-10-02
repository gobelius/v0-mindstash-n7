"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = ["All", "Archive", "Environment", "AI", "Mindstash"]

export function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="mb-8 flex gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
