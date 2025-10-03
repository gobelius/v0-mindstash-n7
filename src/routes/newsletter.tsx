import { createFileRoute } from "@tanstack/react-router"
import { SearchBar } from "@/components/search-bar"
import { CategoryTabs } from "@/components/category-tabs"
import { ContentGrid } from "@/components/content-grid"

export const Route = createFileRoute("/newsletter")({
  component: NewsletterPage,
})

function NewsletterPage() {
  const items = [
    {
      id: "1",
      title: "New Brain Cell Map Revealed",
      image: "/brain-cell-map-blue-wireframe.jpg",
      date: "Today",
    },
    {
      id: "2",
      title: "Environmental changes",
      image: "/ancient-architecture-ruins.jpg",
      date: "Today",
    },
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <SearchBar />
        <CategoryTabs />
        <ContentGrid items={items} />
      </div>
    </div>
  )
}
