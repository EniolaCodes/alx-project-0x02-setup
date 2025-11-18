import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 mb-4 max-w-sm hover:shadow-lg transition duration-300">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mb-4 whitespace-pre-wrap">{email}</p>

      <span className="text-xs text-gray-500">
        {/* {`${address.suite}, ${address.street}, ${address.city}`} */}
        {address}
      </span>
    </div>
  );
};

export default UserCard;
