import React from "react";
import Header from "@/components/layout/Header";
import { NextPage, GetServerSideProps } from "next";
import { PostProps } from "@/interfaces";
import PostCard from "@/components/common/PostCard";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="w-full py-6 px-20 mt-8">
        <h1>Recent Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.title + post.userId}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Posts;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const posts: PostProps[] = data.slice(0, 10).map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: { posts },
  };
};
