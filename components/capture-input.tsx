"use client"

import { useState } from "react"
import { Paperclip, Link2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function CaptureInput() {
  const [content, setContent] = useState("")

  const handleSubmit = () => {
    if (content.trim()) {
      console.log("[v0] Capturing thought:", content)
      setContent("")
    }
  }

  return (
    <div className="relative rounded-xl border border-border bg-card p-6">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Capture your thoughts..."
        className="min-h-[120px] resize-none border-0 bg-transparent p-0 text-base focus-visible:ring-0"
        onKeyDown={(e) => {
          if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
            handleSubmit()
          }
        }}
      />
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Link2 className="h-4 w-4" />
          </Button>
        </div>
        <Button onClick={handleSubmit} disabled={!content.trim()} className="gap-2">
          <Send className="h-4 w-4" />
          Capture
        </Button>
      </div>
    </div>
  )
}
