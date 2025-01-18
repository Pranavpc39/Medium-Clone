
import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { BlogContent } from "../Components/BlogContent";

const SkeletonAppbar = () => {
  return (
    <div className="z-10 fixed top-0 left-0 right-0 bg-white flex justify-between items-center px-10 py-2 border-b border-slate-200 h-16">
      <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
      <div className="flex items-center">
        <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse mr-2"></div>
        <div className="w-6 h-6 bg-gray-200 rounded animate-pulse ml-5"></div>
      </div>
    </div>
  );
};

const BlogContentSkeleton = () => {
  return (
    <div>
      <SkeletonAppbar />
      <div className="grid grid-cols-12 w-full z-0 absolute top-20">
        <div className="col-span-8 ml-20 flex flex-col">
          {/* Title skeleton */}
          <div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          
          {/* Posted date skeleton */}
          <div className="mt-2 h-6 bg-gray-200 rounded w-48 animate-pulse"></div>
          
          {/* Content skeleton - multiple lines */}
          <div className="mt-5 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="col-span-4 mr-20 flex flex-col">
          {/* Author section skeleton */}
          <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
          <div className="flex mt-4 items-center">
            {/* Avatar skeleton */}
            <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="flex flex-col ml-5">
              {/* Author name skeleton */}
              <div className="h-8 bg-gray-200 rounded w-40 animate-pulse"></div>
              {/* Catch phrase skeleton */}
              <div className="mt-2 h-4 bg-gray-200 rounded w-56 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
      id: id || ""
  });

  if (loading) {
      return <BlogContentSkeleton />;
  }

  if (!blog) {
      return (
          <div className="flex justify-center items-center h-screen">
              <div className="text-xl text-gray-600">
                  Blog post not found or there was an error loading it.
              </div>
          </div>
      );
  }

  return <div>
      <BlogContent blog={blog} />
  </div>
};
