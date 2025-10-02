import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ContentCardProps {
  title: string
  date: string
  image: string
  category: string
}

export function ContentCard({ title, date, image, category }: ContentCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden border-border bg-card transition-all hover:border-primary/50">
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 text-base font-medium text-card-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </CardContent>
    </Card>
  )
}
