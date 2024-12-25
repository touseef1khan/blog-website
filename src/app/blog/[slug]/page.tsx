"use client";
import { Blog } from "@/app/data/data";
import React from "react";
import Image from "next/image";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import CommentSection from "@/components/CommentSection";
import Link from "next/link";

function PostPage({ params }: { params: { slug: string } }) {
  // Ensure `id` ko number mein convert karna aur compare karna
  const postId = params.slug;
  const post = Blog.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === postId
  );
  console.log(post?.title);

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen text-3xl font-semibold">
        Post not found!
      </div>
    );
  }

  return (
    <>
      <div className="max-w-3xl md:px-10 px-4 mx-auto py-28 min-h-screen">
        <h1 className="md:text-4xl text-2xl font-[800] leading-snug tracking-wide ">
          {post.title}
        </h1>

        <div className="pt-6 flex flex-wrap items-center gap-x-5 justify-start">
          <div className="flex  gap-x-2 items-center">
            <div className="inline-flex gap-x-2 items-center">
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/touseef-khan-9891422b5/"}
              >
                <LuUser
                  size={30}
                  className="bg-gray-700 p-1 text-white rounded-[50%]"
                />
              </Link>
              <h2>Touseef</h2>
            </div>
          </div>
          <p className="inline-flex gap-x-2 items-center">
            <MdOutlineDateRange />
            {post.date}
          </p>
          <p className="inline-flex gap-x-2 items-center">
            {" "}
            <IoIosTimer />
            {post.read}
          </p>
        </div>

        <div className="w-[100%] py-9 ">
          <Image
            className="h-[25rem] w-full object-cover rounded-lg"
            width={3000}
            height={3000}
            src={post.imgUrl}
            alt={""}
          />
        </div>
        <div>
          <p className="mt-4 text-[16px] sm:text-xl font-semibold tracking-wide text-black ">
            {post.content}
          </p>
          <p className="mt-4 text-[14px] md:text-lg text-gray-600">{post.description1}</p>
          <p className="mt-4 text-[14px] md:text-lg text-gray-600">{post.description2}</p>
        </div>

        <CommentSection id={params.slug}/>
      </div>
    </>
  );
}

export default PostPage;