import { Link, useNavigate } from 'react-router-dom'
// import { AvatarComponent } from './AvatarComponent'

export const Appbar = ({isPublish=true}:{isPublish?:boolean}) =>{
    const navigate = useNavigate();
    return <div className="z-10 fixed top-0 left-0 right-0 bg-white flex justify-between items-center px-10 py-2 border-b border-slate-200 h-16">
        <div className="text-4xl tracking-tighter font-bold font-serif cursor-pointer">
            <Link to={"/"} >Medium</Link>
        </div>
        <div className='flex items-center'>
        {
            isPublish?<Link className='flex items-center justify-center' to={"/publish"}>
            <button type="button" className="mr-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2">Publish</button>
        </Link>
        :<div></div>
        }
        {/* <Link to={"/publish"}>
            <button type="button" className="mr-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Publish</button>
        </Link> */}
            {/* <AvatarComponent name="User7" size = "8" textColour="white" textSize="lg"  /> */}
            <button className='' onClick={()=>{
                localStorage.removeItem('token')
                navigate('/signin')
            }}>
                <svg className="w-6 h-6 text-black-800 ml-5 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
            </button>
        </div>
    </div>
}

