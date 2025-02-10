import Image from "next/image";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "Fresh Thick Achari Chilly Online: Spicy and Flavorful Chilies",
    description:
      "Discover the Bold Taste of Achari Chilly. Looking for a fiery kick to spice up your meals? Look no further than fresh, thick Achari Chilly! These vib...",
    image: "/images/achari-chilly.jpg",
  },
  {
    title: "Buy Fresh Kakora Online: Nutritious and Delicious Spine Gourd",
    description:
      "Discover the Wonders of Kakora. A Nutritional Powerhouse Kakora, also known as spine...",
    image: "/images/kakora.jpg",
  },
  {
    title: "Order Fresh Imported Avocado Online: Creamy and Nutritious Avocados",
    description:
      "Are you craving the creamy, buttery goodness of fresh avocados? Look no further...",
    image: "/images/avocado.jpg",
  },
  {
    title: "Buy Fresh Leeks Online: Nutritious and Flavorful Leeks Delivered",
    description:
      "Discover the Versatility of Fresh Leeks. Leeks are a nutritious and flavorful vegetable that belong to the allium family, along with onions and garlic...",
    image: "/images/leeks.jpg",
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
          <Image
         
            src="/images/blog1.png"
            alt={blogs[0].title}
            width={300}
            height={350}
            className="w-full h-100 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{blogs[0].title}</h2>
            <p className="text-gray-600 mb-4">{blogs[0].description}</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Continue reading
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {blogs.slice(1, 3).map((blog, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/images/blog2.png"
                alt={blog.title}
                width={300}
                height={200}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Continue reading
                </Button>
              </div>
            </div>
          ))} 
        </div>
      </div>
      <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <Image
          src="/images/blog3.png"
          alt={blogs[3].title}
          width={500}
          height={300}
          className="w-full md:w-1/2 h-64 object-cover"
        />
        <div className="p-6 flex flex-col justify-center md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">{blogs[3].title}</h2>
          <p className="text-gray-600 mb-4">{blogs[3].description}</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Continue reading
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/images/blog4.png"
            alt={blogs[0].title}
            width={600}
            height={350}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{blogs[0].title}</h2>
            <p className="text-gray-600 mb-4">{blogs[0].description}</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Continue reading
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {blogs.slice(1, 3).map((blog, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/images/blog5.png"
                alt={blog.title}
                width={300}
                height={200}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Continue reading
                </Button>
              </div>
            </div>
          ))}
         
        </div>
      </div>
    </div>
    </div>  
  );  
} 

