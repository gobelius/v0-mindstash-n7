"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const topTags = ["AI", "Mindstash", "Work", "Kids", "Party", "Basketball", "Nature", "Sky", "Space"]
const bottomTags = [
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
  const [activeTags, setActiveTags] = useState<string[]>([])

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {topTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeTags.includes(tag)
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {bottomTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeTags.includes(tag)
                ? "bg-primary text-primary-foreground"
                : "bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}
