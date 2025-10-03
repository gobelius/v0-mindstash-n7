import { Sidebar } from "@/src/components/sidebar"
import { CaptureInput } from "@/src/components/capture-input"
import { CategoryTabs } from "@/src/components/category-tabs"
import { ContentGrid } from "@/src/components/content-grid"

export default function Page() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-6xl space-y-8 p-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Mindstash</h1>
            <CaptureInput />
          </div>
          <CategoryTabs />
          <ContentGrid />
        </div>
      </main>
    </div>
  )
}
