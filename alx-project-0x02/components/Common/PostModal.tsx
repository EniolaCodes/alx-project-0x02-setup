import { FC, useState, FormEvent } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
  title?: string;
}

const PostModal: FC<PostModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
}) => {
  const [postTitle, setPostTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ title: postTitle, content });
    setPostTitle("");
    setContent("");
    onClose();
  };

  return (
    <div
      className="
        fixed inset-0 flex items-center justify-center
        bg-black bg-opacity-50 z-50
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white w-full max-w-md rounded-xl shadow-lg p-6
          transform transition-all duration-300
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {title || "Create Post"}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="
                w-full border rounded-lg px-3 py-2 
                focus:outline-none focus:ring focus:ring-blue-300
              "
              placeholder="Enter post title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="
                w-full border rounded-lg px-3 py-2 h-28
                focus:outline-none focus:ring focus:ring-blue-300
              "
              placeholder="Write your content here..."
              required
            />
          </div>

          <button
            type="submit"
            className="
              w-full bg-blue-600 text-white py-2 rounded-lg 
              hover:bg-blue-700 transition
            "
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
