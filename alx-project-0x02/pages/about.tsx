import { NextPage } from "next";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: NextPage = () => {
  return (
    <div className="">
      <Header />
      <div className="w-full py-6 px-20 mt-8">
        <h1 className="text-4xl font-bold text-gray-800">About EduTrac</h1>
        <p className="text-gray-600 mt-2">Learn more about us on this page.</p>
        <div className="mt-8 flex space-x-4">
          <Button label="Parents" size="small" shape="rounded-sm" />

          <Button label="Students" size="medium" shape="rounded-md" />

          <Button label="Teachers" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
