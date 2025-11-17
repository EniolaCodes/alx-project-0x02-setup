import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-gray-800">Home</h1>
      <p className="text-gray-600 mt-2">Welcome to our Home page.</p>
    </div>
  );
};

export default Home;
