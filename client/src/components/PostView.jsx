import React, { useState } from "react";

const Comment = ({ comment }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-2 overflow-hidden md:max-w-full md:flex">
      <div className=" md:flex-shrink-0 flex items-center rounded">
        <div
          className="
          w-10
          h-10
          bg-red-500
          rounded-full
          flex
          items-center
          justify-center
          font-bold
          text-white
        "
        >
          KG
        </div>
      </div>
      <div className="p-4 md:w-1/2 md:flex-grow">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {comment.author}
        </div>
        <p className="mt-2 text-gray-600">{comment.content}</p>
        <button
          className="flex items-center focus:outline-none"
          onClick={handleLike}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 mr-1 ${
              liked ? "text-red-500 animate-like" : "text-gray-600"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                liked
                  ? "M5 12h14M12 5l7 7-7 7"
                  : "M12 4.5c-3.3 0-6 2.7-6 6 0 1.8.8 3.4 2 4.5l4 3.5 4-3.5c1.2-1.1 2-2.7 2-4.5 0-3.3-2.7-6-6-6zm0 10.5l-3.5 3-1.5-1.5 5-4.5 5 4.5-1.5 1.5-3.5-3z"
              }
            />
          </svg>
          <p className="text-gray-600 text-sm">{liked ? "Liked" : "Like"}</p>
        </button>
      </div>
    </div>
  );
};

const PostView = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-full mx-auto bg-white rounded-md shadow-md overflow-hidden">
      <div className="md:flex gap-4">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="https://picsum.photos/500/500?image=1025"
            alt="Post"
            className="w-full h-auto object-cover md:h-full md:object-none"
          />
        </div>
        <div className="md:w-1/2 p-4 flex flex-col justify-center ">
          <div className="flex items-center mb-4">
            <img
              src="https://picsum.photos/50/50?image=1005"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-2 object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">Username</h2>
              <p className="text-gray-600 text-sm">Location</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Title</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quibusdam impedit deserunt explicabo deleniti id facilis eaque
              tempora a, dicta, accusamus inventore voluptatem, itaque minima
              delectus quae perspiciatis quisquam fugit!
            </p>
          </div>
          <div className="flex items-center mb-4">
            <button
              className="flex items-center focus:outline-none"
              onClick={handleLike}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 mr-1 ${
                  liked ? "text-red-500 animate-like" : "text-gray-600"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    liked
                      ? "M5 12h14M12 5l7 7-7 7"
                      : "M12 4.5c-3.3 0-6 2.7-6 6 0 1.8.8 3.4 2 4.5l4 3.5 4-3.5c1.2-1.1 2-2.7 2-4.5 0-3.3-2.7-6-6-6zm0 10.5l-3.5 3-1.5-1.5 5-4.5 5 4.5-1.5 1.5-3.5-3z"
                  }
                />
              </svg>
              <p className="text-gray-600 text-sm">
                {liked ? "Liked" : "Like"}
              </p>
            </button>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <Comment
              comment={{
                author: "John Doe",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              }}
            />
            <Comment
              comment={{
                author: "Jane Doe",
                content:
                  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
