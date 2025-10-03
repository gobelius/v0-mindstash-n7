"use client"

import type React from "react"
import { useState } from "react"
import { Paperclip, Link2, Send } from "lucide-react"

export function CaptureInput() {
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      console.log("Capturing:", input)
      setInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative rounded-xl border border-input bg-card shadow-sm transition-shadow focus-within:shadow-md focus-within:ring-2 focus-within:ring-ring">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Capture your thoughts..."
          className="w-full resize-none bg-transparent px-4 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
          rows={4}
        />
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label="Attach file"
            >
              <Paperclip className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              aria-label="Add link"
            >
              <Link2 className="h-5 w-5" />
            </button>
          </div>
          <button
            type="submit"
            disabled={!input.trim()}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}
