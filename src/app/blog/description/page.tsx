"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function BlogDescription() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ x: "100vw" }} // Start from right
      animate={{ x: 0 }} // Slide to center
      exit={{ x: "-100vw" }} // Slide out to left
      transition={{ type: "tween", duration: 0.5 }}
      className="max-w-3xl mx-auto p-6"
    >
      <Button className="mb-4" onClick={() => router.push("/blog")}>
        ← Back to Blogs
      </Button>
      <h1 className="text-3xl font-bold">Welcome to the Blog Description Page</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the new blog description page that appears when navigating from the blog listing.
      </p>
    </motion.div>
  );
}