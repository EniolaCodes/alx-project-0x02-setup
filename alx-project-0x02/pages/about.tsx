import { NextPage } from "next";
import Button from "@/components/Common/Button";

const About: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-gray-800">About</h1>
      <p className="text-gray-600 mt-2">Learn more about us on this page.</p>
      <div className="mt-8 flex flex-col space-y-4">
        <Button label="Parents" size="small" shape="rounded-sm" />

        <Button label="Students" size="medium" shape="rounded-md" />

        <Button label="Teachers" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default About;
