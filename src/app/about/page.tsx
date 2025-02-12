import React, { JSX } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Leaf, Truck, RefreshCcw, Tag, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the type for the items in the "Why Choose Us" sion
interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const AboutUs: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Tag className="text-green-600" size={24} />,
      title: "Fresh Produce at Best Prices",
      description:
        "We're dedicated to providing affordable options for fresh produce delivered straight to your doorstep.",
    },
    {
      icon: <Leaf className="text-green-600" size={24} />,
      title: "Wide Assortment of Freshness",
      description:
        "Discover a diverse array of fresh produce sourced directly from local farmers.",
    },
    {
      icon: <Truck className="text-green-600" size={24} />,
      title: "Free Delivery",
      description:
        "Enjoy the convenience of free delivery within our service area.",
    },
    {
      icon: <RefreshCcw className="text-green-600" size={24} />,
      title: "Hassle-Free Returns",
      description:
        "If you're not satisfied with any of your items, we'll arrange for an easy return and replacement.",
    },
  ];

  // Team members' data
  const team = [
    {
      name: "Akash",
      role: "Delivery Expert",
      social: ["Twitter", "LinkedIn", "Facebook"],
    },
    {
      name: "Vivek Singh",
      role: "Procurement Manager",
      social: ["Twitter", "LinkedIn", "Facebook"],
    },
    {
      name: "Pradeep Kumar",
      role: "Marketing Specialist",
      social: ["Twitter", "LinkedIn", "Facebook"],
    },
    {
      name: "Kaushal Sharma",
      role: "Customer Service Representative",
      social: ["Twitter", "LinkedIn", "Facebook"],
    },
  ]
  

  return (
    <div className="bg-[#f7f6f2] py-16 px-4 md:px-40 text-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-20">
        About FreshBuyZar
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/about.png"
            alt="Fresh fruits"
            width={400}
            height={100}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <h3 className="text-2xl font-poppins font-semibold">Welcome to FreshBuyZar</h3>
          <p className="text-gray-700">
          Discover FreshBuyZar's story, mission, and commitment to providing top-quality products.
           Learn more about our services and vision today!
            Our Journey Food Buyzar began with a simple idea: to bring the joy of authentic,
             home-cooked meals to every table.
              Founded in 2021 by a group of food enthusiasts,
               we've built a community around the love for quality ingredients,
                delicious flavors, and the magic that happens when people come together to share a meal.
                 Our Mission At Food Swap, we believe that food is more than just nourishment—it's 
                 a language that transcends borders and cultures. Our mission is to empower home chefs 
                 and local farmers, providing a platform where they can showcase their culinary creations
                  and fresh produce. We're committed to sustainability, reducing food waste,
                   and creating a positive impact on our environment.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mt-16 mb-8">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <Card key={index} className="border border-green-600 rounded-lg p-2">
            <CardContent className="flex flex-col items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

     
      {/* Stats Section */}
      <div className="relative -mx-6 md:-mx-40 w-[calc(100%+3rem)] md:w-[calc(100%+20rem)] bg-green-100 mt-16">
        <div className="py-24 md:py-12 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-green-800 font-semibold text-xl text-center max-w-7xl mx-auto px-6">
  <div>
    <p className="text-3xl font-bold">10k+</p>
    <p>Fresh Deliveries</p>
  </div>
  <div>
    <p className="text-3xl font-bold">234+</p>
    <p>Produce Varieties</p>
  </div>
  {/* Hidden on sm but shown on larger screens */}
  <div className="hidden sm:block">
    <p className="text-3xl font-bold">12+</p>
    <p>Community Engagements</p>
  </div>
  <div className="hidden sm:block">
    <p className="text-3xl font-bold">110+</p>
    <p>Seasonal Recipes</p>
  </div>
</div>

        </div>
      </div>

      {/* Our Team Section */}
      {/* Team Section */}
      <section className="bg-green-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Our Team</h2>
          <h1 className="text-xl font-bold font-poppins text-center text-black mb-6">Meet Our Fresh Buyzar Team</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Meet the passionate individuals who are behind Fresh Buyzar, working tirelessly to bring you the freshest
            produce and a delightful grocery delivery experience.
          </p>


          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
  {team.map((member, index) => (
    <Card key={index} className="w-full">
      <CardContent className="pt-4">
        <div className="w-56 h-36  rounded-xl bg-gray-200 mx-auto mb-4" />
        <h3 className="font-semibold mb-1">{member.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{member.role}</p>
        <div className="gap-4">
          {member.social.map((platform, idx) => (
            <Button key={idx} variant="ghost" size="icon" className="h-8 w-8">
              {platform}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  ))}
</div>






        </div>
      </section>
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">About Us</h2>
      <p className="text-center text-black-600 max-w-2xl mx-auto mb-12">Fresh Buyzar is a prefered farm fresh fruits & vegetbale store in Delhi NCR. </p>
          
        </div>
    </div>
  );
};

export default AboutUs;

