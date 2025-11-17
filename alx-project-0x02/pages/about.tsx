import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-gray-800">About</h1>
      <p className="text-gray-600 mt-2">Learn more about us on this page.</p>
    </div>
  );
};

export default About;
