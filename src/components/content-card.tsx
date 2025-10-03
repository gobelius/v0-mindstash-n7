interface ContentCardProps {
  title: string
  image: string
  date: string
}

export function ContentCard({ title, image, date }: ContentCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 font-medium text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </div>
  )
}
