import { ContentCard } from "@/components/content-card"

const mockContent = [
  {
    id: 1,
    title: "New Brain Cell Map Revealed",
    date: "Today",
    image: "/brain-cell-map-blue-wireframe.jpg",
    category: "AI",
  },
  {
    id: 2,
    title: "Environmental changes developing faster than ever",
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
    title: "New Brain Cell Map Revealed",
    date: "Today",
    image: "/tennis-rackets-sports.jpg",
    category: "Archive",
  },
  {
    id: 5,
    title: "Environmental changes developing faster than ever",
    date: "Today",
    image: "/red-cherries-close-up.jpg",
    category: "Environment",
  },
  {
    id: 6,
    title: "Environmental changes developing faster than ever",
    date: "Today",
    image: "/forest-trees-cloudy-day.jpg",
    category: "Environment",
  },
]

export function ContentGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mockContent.map((item) => (
        <ContentCard key={item.id} {...item} />
      ))}
    </div>
  )
}
