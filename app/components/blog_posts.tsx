import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      image: "/images/hero.png",
      date: "Sunday, 1 Jan 2023",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
    },
    {
      id: 2,
      image: "/images/post2.png",
      date: "Sunday, 1 Jan 2023",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...",
      tags: [],
    },
    {
      id: 3,
      image: "/images/post3.png",
      date: "Sunday, 1 Jan 2023",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: [],
    },
    {
      id: 4,
      image: "/images/post4.png",
      date: "Sunday, 1 Jan 2023",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: [],
    },
    {
      id: 5,
      image: "/images/post5.png",
      date: "Sunday, 1 Jan 2023",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: [],
    },
    {
      id: 6,
      image: "/images/post6.png",
      date: "Sunday, 1 Jan 2023",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: [],
    },
    {
      id: 7,
      image: "/images/post7.png",
      date: "Sunday, 1 Jan 2023",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: [],
    },
    {
      id: 8,
      image: "/images/post8.png",
      date: "Sunday, 1 Jan 2023",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: [],
    },
    {
      id: 9,
      image: "/images/post9.png",
      date: "Sunday, 1 Jan 2023",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: [],
    },
    {
      id: 10,
      image: "/images/post10.png",
      date: "Sunday, 1 Jan 2023",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: [],
    },
  ];

  return (
    <div className="px-8 py-12 lg:px-24">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-10">Recent blog posts</h1>

      {/* Featured Post */}
      <div className="mb-12">
        <Image
          src={posts[0].image}
          width={100}
          height={100}
          alt={posts[0].title}
          className="rounded-lg w-full"
        />
        <div className="mt-6">
          <p className="text-[#6941C6] text-lg">{posts[0].date}</p>
          <div className="flex items-center gap-2 mt-2">
            <h2 className="text-3xl font-bold">{posts[0].title}</h2>
            <GoArrowUpRight size={20} />
          </div>
          <p className="text-[#667085] mt-2">{posts[0].description}</p>
          <div className="flex gap-2 mt-4">
            {posts[0].tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-4 py-1 bg-[#EDE9FE] text-[#6941C6] rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(1).map((post) => (
          <div key={post.id}>
            <Image
              src={post.image}
              width={300}
              height={250}
              alt={post.title}
              className="rounded-lg w-full"
            />
            <div className="mt-4">
              <p className="text-[#6941C6] text-sm">{post.date}</p>
              <h3 className="text-lg font-semibold mt-2">{post.title}</h3>
              <p className="text-[#667085] text-sm mt-2">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-center my-5">

      <span className=" bg-gray-300 text-lg px-4 py-2 rounded-md cursor-pointer">view more...</span>
      </div>
    </div>
  );
};

export default BlogPosts;
