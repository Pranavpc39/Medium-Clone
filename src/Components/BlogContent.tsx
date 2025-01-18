import { Blog } from "../hooks"
import { Appbar } from "./Appbar"

export const BlogContent = ({blog} : {blog: Blog}) =>{
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        console.log("---> date: ",dateString);
        
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    return <div>
        <Appbar/>
        <div className="grid grid-cols-12 w-full z-0 absolute top-20">
            <div className="col-span-12 lg:col-span-8 px-4 lg:ml-20 flex flex-col">
                <div className="text-3xl font-bold">{blog.title}</div>
                <div className="lg:hidden mt-2 text-slate-500 font-semibold">Author . {blog.author.name || "Anonymous"}</div>
                <div className="mt-2 text-slate-500 font-semibold">Posted on {formatDate(blog.createdAt)}</div>
                <div className="mt-5 text-slate-700 font-medium">{blog.content}</div>
            </div>
            <div className="hidden lg:flex col-span-4 mr-20 flex-col">
                <div>Author</div>
                <div className="flex mt-4 items-center">
                    <div className="w-6 h-6 bg-slate-200 rounded-full hidden lg:block"></div>
                    <div className="flex flex-col ml-5">
                        <div className="text-2xl font-bold">{blog.author.name || "Anonymous"}</div>
                        <div className="text-slate-400 font-semibold">The Random catch phrase to grab attention of the reader</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}