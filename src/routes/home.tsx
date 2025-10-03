import { createFileRoute } from "@tanstack/react-router"
import { SearchBar } from "@/components/search-bar"
import { CategoryTabs } from "@/components/category-tabs"
import { ContentGrid } from "@/components/content-grid"

export const Route = createFileRoute("/home")({
  component: HomePage,
})

function HomePage() {
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
    {
      id: "3",
      title: "Environmental changes developing faster than ever",
      image: "/tropical-island-purple-sunset.jpg",
      date: "Today",
    },
    {
      id: "4",
      title: "Environmental changes developing faster than ever",
      image: "/red-cherries-closeup.jpg",
      date: "Today",
    },
    {
      id: "5",
      title: "Environmental changes developing faster than ever",
      image: "/ancient-architecture-ruins.jpg",
      date: "Today",
    },
    {
      id: "6",
      title: "Environmental changes developing faster than ever",
      image: "/forest-trees-cloudy.jpg",
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
