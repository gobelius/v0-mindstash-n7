import { Sidebar } from "@/components/sidebar"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ContentGrid } from "@/components/content-grid"
import { CategoryTabs } from "@/components/category-tabs"

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-64 flex-1">
        <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center gap-4 px-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search" className="pl-9 bg-muted/50 border-0" />
            </div>
          </div>
        </div>

        <div className="p-8">
          <CategoryTabs />
          <ContentGrid />
        </div>
      </main>
    </div>
  )
}
