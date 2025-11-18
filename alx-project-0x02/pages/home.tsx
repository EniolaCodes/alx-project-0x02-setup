import { NextPage } from "next";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";
import Header from "@/components/layout/Header";

interface Post {
  title: string;
  content: string;
}

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  // handle data coming from the modal
  const handleAddPost = (data: Post) => {
    setPosts((prev) => [...prev, data]); // add new post to list
  };
  return (
    <div className="">
      <Header />
      <div className="w-full py-6 px-20 mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Welcome to EduTrac
        </h1>
        {/* Button to open modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create New Post
        </button>

        {/* Render posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
        {/* Post Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
          title="Create New Post"
        />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Overview"
            content="EduTrac helps schools, parents, teachers, and students collaborate seamlessly."
          />

          <Card
            title="Track Performance"
            content="Easily monitor student progress, attendance, and academic performance."
          />

          <Card
            title="Communication Made Easy"
            content="Send messages, announcements, and assignments in real-time."
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
