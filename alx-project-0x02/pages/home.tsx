import { NextPage } from "next";
import Card from "@/components/Common/Card";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Welcome to EduTrac
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
};

export default Home;
