import { useEffect } from "react";
import { Appbar } from "../Components/Appbar"
import { BlogCard } from "../Components/BlogCard"
import { useBlogs } from "../hooks"
import { useNavigate } from "react-router-dom";

const SkeletonBlogCard = () => {
    return (
      <div className="p-5 border-b border-slate-200 w-full mt-5">
        <div className="flex items-center">
          {/* Avatar skeleton */}
          <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          {/* Author name skeleton */}
          <div className="h-4 bg-gray-200 rounded w-24 ml-2 animate-pulse"></div>
          <div className="ml-2 h-1 w-1 bg-gray-200 rounded-full"></div>
          {/* Date skeleton */}
          <div className="h-4 bg-gray-200 rounded w-20 ml-2 animate-pulse"></div>
        </div>
        {/* Title skeleton */}
        <div className="mt-2">
          <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        </div>
        {/* Content skeleton */}
        <div className="mt-2">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
        </div>
        {/* Read time skeleton */}
        <div className="mt-5">
          <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
        </div>
      </div>
    );
  };
  
  const SkeletonAppbar = () => {
    return (
      <div className="z-10 fixed top-0 left-0 right-0 bg-white flex justify-between items-center px-10 py-2 border-b border-slate-200 h-16">
        {/* Logo skeleton */}
        <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
        {/* Button skeleton */}
        <div className="flex items-center">
          <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse mr-2"></div>
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse ml-5"></div>
        </div>
      </div>
    );
  };

export const Blogs = () =>{

    const {loading, blogs} = useBlogs();    
    const navigate = useNavigate()

    useEffect(()=>{
      if(!localStorage.getItem('token')){
        navigate('/signin')
      }
      else{
        console.log("You are logged in");
        
      }
    },[])

    if (loading){
        return (
            <div className="flex flex-col justify-center items-center relative">
        <div className="w-full absolute">
          <SkeletonAppbar />
        </div>
        <div className="z-0 flex flex-col justify-center items-center max-w-xl absolute top-10">
          {[1, 2, 3,4,5].map((index) => (
            <SkeletonBlogCard key={index} />
          ))}
        </div>
      </div>
        )
    }

    return <div className="flex flex-col justify-center items-center relative">
        <div className="w-full absolute">
            <Appbar/>
        </div>
        <div className="z-0 flex flex-col justify-center items-center max-w-xl absolute top-10">
            {
                blogs.map(blog => <BlogCard 
                    id = {blog.id}
                    key = {blog.id}
                    autherName = {blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"9th dec 2024"}
                />)
            }
            
            
        </div>
    </div>
}