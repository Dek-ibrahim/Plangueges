// index.tsx

import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';

const App = () => {
  return (
    <body className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        {/* User Info */}
        <div className="flex items-center mb-4">
          <img src="https://placekitten.com/50/50" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <p className="font-semibold text-lg">John Doe</p>
            <p className="text-gray-500 text-sm">Posted a new update</p>
          </div>
        </div>

        {/* Post Content */}
        <p className="text-gray-800 text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula metus nec massa posuere, vitae hendrerit ex consequat.</p>

        {/* Image */}
        <img src="https://placekitten.com/400/200" alt="Post Image" className="mb-4 rounded-lg" />

        {/* Like, Comment, Share */}
        <div className="flex items-center text-gray-500 mb-4">
          <div className="flex items-center mr-6">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12s3-4 6-4 6 4 6 4m-6-4v8m6-8v8m-6-4a9 9 0 01-9-9h18a9 9 0 01-9 9z"></path>
            </svg>
            <span className="text-sm">Like</span>
            <span className="ml-1 text-sm text-gray-600">12 Likes</span>
          </div>
          <div className="flex items-center mr-6">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
            <span className="text-sm">Comment</span>
            <span className="ml-1 text-sm text-gray-600">4 Comments</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 13v6H7v-6m0-4h10m-10-6L7 2l-2 2m12-2l2 2-2 2"></path>
            </svg>
            <span className="text-sm">Share</span>
          </div>
        </div>

        {/* Comments */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <img src="https://placekitten.com/40/40" alt="User Avatar" className="w-6 h-6 rounded-full mr-2" />
            <p className="text-sm font-semibold">Jane Smith</p>
          </div>
          <p className="text-gray-600 text-sm">Great post! 🐱</p>
        </div>

        {/* Comment Input */}
        <div className="flex items-center">
          <img src="https://placekitten.com/30/30" alt="User Avatar" className="w-6 h-6 rounded-full mr-2" />
          <input type="text" placeholder="Add a comment..." className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
        </div>

        {/* Timestamp */}
        <p className="text-gray-500 text-sm mt-2">Posted 2 hours ago</p>
      </div>
    </body>
  );
};

// Run the App
document.body.innerHTML = '';
document.body.appendChild(App());
