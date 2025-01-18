import './styles.css'
import { Appbar } from "../Components/Appbar";
import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

export const PublishBlog = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate();

    return <div>
        <Appbar isPublish={false}/>
        <div className='pt-16 px-10'>
            <div className="min-h-screen flex flex-col">
                <div className="mb-6 mt-10">
                    {/* <label  className="block mb-2 text-sm font-medium text-gray-900">Title</label> */}
                    <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='Add Title' className="font-serif outline-none focus:border-l w-full p-2.5 text-4xl font-semibold"/>
                </div>
                <div className='mt-10'>
                    <textarea value={content} onChange={(e)=> setContent(e.target.value)} rows={10} placeholder='Tell Your Story ...' className="font-serif outline-none w-full p-2.5 text-xl overflow-hidden leading-extra-loose"/>
                </div>
                <div className=''>
                <button onClick={async()=>{
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content
                    },{
                        headers:{
                            Authorization:localStorage.getItem("token")
                        }
                    })
                    navigate(`/blog/${response.data.id}`)
                }
                } type="button" className="mr-10 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Publish</button>
                </div>
            </div>
        </div>
    </div>
};
