import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-black text-error">404</h1>
          <p className="py-6 text-2xl font-bold text-base-content">
            Oops! Page not found.
          </p>
          <p className="pb-6 text-base-content/70">
            The page you are looking for doesnt exist or has been moved.
          </p>
          <Link href="/">
            <button className="btn btn-primary bg-[#C2F800] border-none text-black">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
