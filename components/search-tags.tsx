"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const topTags = ["AI", "Mindstash", "Work", "Kids", "Party", "Basketball", "Nature", "Sky", "Space"]

const moreTags = [
  "All",
  "Environment",
  "Plants",
  "Formula 1",
  "Football",
  "Makeup",
  "Fashion",
  "Design",
  "Sports",
  "Politics",
]

export function SearchTags() {
  const [activeTag, setActiveTag] = useState("All")

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-wrap gap-2">
        {topTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80",
            )}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {moreTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80",
            )}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
