import { Link } from "react-router-dom"
import { AvatarComponent } from "./AvatarComponent"

interface BlogCardProps {
    id: string,
    autherName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = (BlogCardProps:BlogCardProps) =>{
    return <Link className=" w-full" to={`/blog/${BlogCardProps.id}`}>
        <div className="p-5 border-b border-slate-200 w-full mt-5 cursor-pointer">
            <div className="flex items-center">
                <AvatarComponent name={BlogCardProps.autherName} textColour="white" size="6" /> 
                <div className="font-extralight ml-2">{BlogCardProps.autherName}</div> 
                <div className="ml-2 h-1 w-1 bg-slate-500 rounded-full"></div>
                <div className="ml-2 font-thin text-slate-500">{BlogCardProps.publishedDate}</div>
            </div>
            <div className="text-xl font-bold mt-2">{BlogCardProps.title}</div>
            <div>
                {BlogCardProps.content.slice(0,100) + "..." }
            </div>
            <div className="text-slate-400 text-sm mt-5">
                {`${Math.ceil(BlogCardProps.content.length / 100)} minutes`}
            </div>
        </div>
    </Link>
}


