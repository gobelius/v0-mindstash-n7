import { ContentCard } from "@/components/content-card"

const recentContent = [
  {
    id: 1,
    title: "New Brain Cell Map Revealed",
    date: "Today",
    image: "/brain-cell-map-blue-wireframe.jpg",
    category: "AI",
  },
  {
    id: 2,
    title: "Environmental changes",
    date: "Today",
    image: "/ancient-architecture-ruins.jpg",
    category: "Environment",
  },
  {
    id: 3,
    title: "Environmental changes developing faster than ever",
    date: "Today",
    image: "/tropical-island-purple-sunset.jpg",
    category: "Environment",
  },
  {
    id: 4,
    title: "Environmental changes developing faster than ever",
    date: "Today",
    image: "/red-cherries-close-up.jpg",
    category: "Environment",
  },
]

const moreResults = [
  {
    id: 5,
    title: "Environmental changes developing faster than ever",
    date: "Today",
    image: "/ancient-architecture-ruins.jpg",
    category: "Environment",
  },
  {
    id: 6,
    title: "Environmental changes developing faster than ever",
    date: "Today",
    image: "/forest-trees-cloudy-day.jpg",
    category: "Environment",
  },
  {
    id: 7,
    title: "Environmental changes developing faster than ever",
    date: "Today",
    image: "/tennis-rackets-sports.jpg",
    category: "Sports",
  },
]

export function SearchResults() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Recent</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recentContent.map((item) => (
            <ContentCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">More Results</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreResults.map((item) => (
            <ContentCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}
