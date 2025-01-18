import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog{
    content: string,
    title: string,
    id: string,
    author:{
        name: null
    }
}

interface BlogHookResult {
    loading: boolean;
    blog: Blog | null; // Changed from undefined to null for explicit nullability
}

export const useBlog = ({ id }: { id: string }): BlogHookResult => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null); // Initialize with null

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: `${localStorage.getItem("token")}`
                    }
                });
                
                setBlog(response.data.post);
                setLoading(false);
            } catch (err: any) {
                setLoading(false);
                setBlog(null); // Explicitly set to null on error
                console.error("Error details:");
                console.error("Status code:", err.response?.status);
                console.error("Error data:", err.response?.data);
                console.error("Headers:", err.response?.headers);
            }
        };
        fetchBlog();
    }, [id]);

    return {
        loading,
        blog
    };
};

export const useBlogs = () =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(()=>{
        // console.log("token : ",localStorage.getItem('token'));
        const fetchBlogs = async() =>{
            try{
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                    headers:{
                        Authorization: `${localStorage.getItem("token")}`
                    }
                })
                
                setBlogs(response.data.post) 
                setLoading(false)
                
            }
            catch (err:any) {
                console.error("Error details:");
                console.error("Status code:", err.response?.status);
                console.error("Error data:", err.response?.data);
                console.error("Headers:", err.response?.headers);
            }
        }
        fetchBlogs();
    },[])

    return{
        loading,
        blogs
    }
}