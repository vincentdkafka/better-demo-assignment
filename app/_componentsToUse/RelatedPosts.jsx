import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const RelatedPosts = () => {
  // Mock blog data
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development",
      description:
        "Explore trends like AI-powered design, serverless architectures, and the future of full-stack development.",
      href: "#",
      readMore: "Read more",
    },
    {
      id: 2,
      title: "How to Optimize React Apps",
      description:
        "Tips and techniques to make your React apps faster, more scalable, and user-friendly.",
      href: "#",
      readMore: "Read more",
    },
    {
      id: 3,
      title: "Understanding Tailwind CSS",
      description:
        "Learn how utility-first CSS can speed up your development workflow and keep your code clean.",
      href: "#",
      readMore: "Read more",
    },
    {
      id: 4,
      title: "Why TypeScript Matters",
      description:
        "See why TypeScript has become a go-to choice for large-scale projects and safer codebases.",
      href: "#",
      readMore: "Read more",
    },
    {
      id: 5,
      title: "Next.js for Beginners",
      description:
        "A quick guide to getting started with Next.js, the React framework for building modern web apps.",
      href: "#",
      readMore: "Read more",
    },
    {
      id: 6,
      title: "Mastering UI/UX Principles",
      description:
        "Practical design tips to create interfaces that feel intuitive and delightful for users.",
      href: "#",
      readMore: "Read more",
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-gray-800 text-2xl font-semibold mb-12">
          Related Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="w-full h-full bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 max-w-sm"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-gray-800 font-semibold text-lg mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.description}
                  </p>
                </div>
                <a
                  href={post.href}
                  className="inline-flex items-center gap-1 text-green-600 text-sm font-medium hover:text-green-700 transition-colors duration-200"
                >
                  {post.readMore} <ArrowRight className="size-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
