import { createFileRoute } from "@tanstack/react-router"
import { CaptureInput } from "@/components/capture-input"

export const Route = createFileRoute("/")({
  component: CapturePage,
})

function CapturePage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-foreground">Ready to Mindstash?</h1>
        </div>
        <CaptureInput />
      </div>
    </div>
  )
}
