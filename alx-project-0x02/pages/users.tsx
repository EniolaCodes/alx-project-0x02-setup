import { NextPage, GetServerSideProps } from "next";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  return (
    <div className="">
      <Header />
      <div className="w-full py-6 px-20 mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;

// Fetch user data from JSONPlaceholder

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((u: any) => ({
    name: u.name,
    email: u.email,
    address: u.address, // full address object
  }));

  return {
    props: { users },
  };
};
