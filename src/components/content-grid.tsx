import { ContentCard } from "./content-card"

interface ContentItem {
  id: string
  title: string
  image: string
  date: string
}

interface ContentGridProps {
  items: ContentItem[]
}

export function ContentGrid({ items }: ContentGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ContentCard key={item.id} {...item} />
      ))}
    </div>
  )
}
