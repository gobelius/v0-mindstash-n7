import { ContentGrid } from "./content-grid"

interface ContentItem {
  id: string
  title: string
  image: string
  date: string
}

interface SearchResultsProps {
  recentItems: ContentItem[]
  moreResults: ContentItem[]
}

export function SearchResults({ recentItems, moreResults }: SearchResultsProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-xl font-semibold text-foreground">Recent</h2>
        <ContentGrid items={recentItems} />
      </div>
      <div>
        <h2 className="mb-4 text-xl font-semibold text-foreground">More Results</h2>
        <ContentGrid items={moreResults} />
      </div>
    </div>
  )
}
