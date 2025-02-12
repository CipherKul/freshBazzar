"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const blogs = [
  {
    title: "Fresh Thick Achari Chilly Online: Spicy and Flavorful Chilies",
    description:
      "Discover the Bold Taste of Achari Chilly. Looking for a fiery kick to spice up your meals? Look no further than fresh, thick Achari Chilly! These vib...",
    image: "/images/achari-chilly.jpg",
  },
  {
    title: "Buy Fresh Kakora Online: Nutritious and Delicious Spine Gourd",
    description: "Discover the Wonders of Kakora. A Nutritional Powerhouse Kakora, also known as spine...",
    image: "/images/kakora.jpg",
  },
  {
    title: "Order Fresh Imported Avocado Online: Creamy and Nutritious Avocados",
    description: "Are you craving the creamy, buttery goodness of fresh avocados? Look no further...",
    image: "/images/avocado.jpg",
  },
  {
    title: "Buy Fresh Leeks Online: Nutritious and Flavorful Leeks Delivered",
    description:
      "Discover the Versatility of Fresh Leeks. Leeks are a nutritious and flavorful vegetable that belong to the allium family, along with onions and garlic...",
    image: "/images/leeks.jpg",
  },
]

export default function BlogPage() {
 
    const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header with pagination */}
      <div className="flex justify-between items-center px-4 md:px-6 py-4 md:py-6">
        <h1 className="text-2xl md:text-3xl font-bold">Blogs</h1>
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="text-base md:text-lg font-semibold">1</span>
            <Button variant="outline" size="icon" className="text-green-600" onClick={() => router.push('/blog/description')}>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
        </div>
      </div>

      {/* Featured Blog Section */}
      <div className="px-4 md:px-6 lg:px-16 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Main Featured Blog */}
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <Image
                src="/images/blog1.png"
                alt="Seasonal Fruits"
                width={450}
                height={150}
                className="rounded-lg w-full h-48 md:h-60 object-cover"
              />
              <div className="mt-4">
                <h2 className="text-lg md:text-xl font-bold">The Health Benefits of Eating Seasonal Fruits</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  In the rich tapestry of Indian culture, food holds a special place...
                </p>
                <Button className="mt-3 bg-green-500 hover:bg-green-600 text-white" onClick={() => router.push('/blog/description')}>Continue reading</Button>
              </div>
            </CardContent>
          </Card>

          {/* Side Blogs */}
          <div className="space-y-4">
            {[1, 2].map((index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                <Image
                  src={`/images/blog${index + 1}.png`}
                  alt="Blog Image"
                  width={250}
                  height={250}
                  className="rounded-lg w-full md:w-1/3 h-48 md:h-32 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold">Buy Fresh Fenugreek (Methi) Online</h3>
                  <p className="text-gray-600 text-sm mt-2">Discover the Goodness of Fresh Fenugreek...</p>
                  <Button className="mt-2 bg-green-500 hover:bg-green-600 text-white text-sm" onClick={() => router.push('/blog/description')}>Continue reading</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal Featured Blog */}
      <div className="px-4 md:px-6 lg:px-16 mb-8">
        <Card className="rounded-2xl overflow-hidden">
          <CardContent className="p-4 md:p-6 flex flex-col md:flex-row gap-6">
            <Image
              src="/images/blog4.png"
              alt={blogs[3].title}
              width={400}
              height={200}
              className="w-full md:w-1/2 h-48 md:h-60 rounded-lg object-cover"
            />
            <div className="flex flex-col justify-center md:w-1/2">
              <h2 className="text-lg md:text-xl font-semibold mb-2">{blogs[3].title}</h2>
              <p className="text-gray-600 mb-4 text-sm md:text-base">{blogs[3].description}</p>
              <Button className="bg-green-500 hover:bg-green-600 text-white w-fit" onClick={() => router.push('/blog/description')}>Continue reading</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Blog Grid */}
      <div className="px-4 md:px-6 lg:px-16 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Main Blog */}
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <Image
                src="/images/blog5.png"
                alt="Blog Image"
                width={450}
                height={150}
                className="rounded-lg w-full h-48 md:h-60 object-cover"
              />
              <div className="mt-4">
                <h2 className="text-lg md:text-xl font-bold">The Health Benefits of Eating Seasonal Fruits</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  In the rich tapestry of Indian culture, food holds a special place...
                </p>
                <Button className="mt-3 bg-green-500 hover:bg-green-600 text-white" onClick={() => router.push('/blog/description')}>Continue reading</Button>
              </div>
            </CardContent>
          </Card>

          {/* Side Blogs */}
          <div className="space-y-4">
            {[6, 7].map((index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4">
                <Image
                  src={`/images/blog${index}.png`}
                  alt="Blog Image"
                  width={250}
                  height={250}
                  className="rounded-lg w-full md:w-1/3 h-48 md:h-32 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold">Buy Fresh Mixed Sprouts Online</h3>
                  <p className="text-gray-600 text-sm mt-2">Discover the Benefits of Fresh Mixed Sprouts...</p>
                  <Button className="mt-2 bg-green-500 hover:bg-green-600 text-white text-sm" onClick={() => router.push('/blog/description')}>Continue reading</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

