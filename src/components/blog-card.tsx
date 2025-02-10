import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  imageUrl: string
  className?: string
  isLarge?: boolean
}

export function BlogCard({ title, excerpt, imageUrl, className, isLarge = false }: BlogCardProps) {
  return (
    <Card className={cn("overflow-hidden border-none shadow-none", className)}>
      <div className={cn("relative overflow-hidden rounded-lg", isLarge ? "aspect-[2/1]" : "aspect-[4/3]")}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="mt-4 space-y-2 px-0">
        <h2 className={cn("font-bold text-gray-900", isLarge ? "text-2xl md:text-3xl" : "text-xl")}>{title}</h2>
        <p className="text-gray-600">{excerpt}</p>
        <Button variant="default" className="bg-green-600 hover:bg-green-700">
          Continue reading
        </Button>
      </CardContent>
    </Card>
  )
}

export default BlogCard;