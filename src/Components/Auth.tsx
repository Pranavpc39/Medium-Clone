import { Link, useNavigate } from "react-router-dom"
import { Quotes } from "../Components/Quotes"
import { InputAuth } from "../Components/InputAuth"
import { ButtonAuth } from "../Components/ButtonAuth"
import { useState } from "react"
import { signupInput } from "@pranavpc39/medium-app-common"
import axios from "axios"
import { BACKEND_URL } from "../config"


interface AuthProps{
    type: string
};

export const Auth = ({type}:AuthProps) => {
    const navigate = useNavigate();
    const [authInput, setAuthInput] = useState<signupInput>({
        name:"",
        email:"",
        password:""
    })

    async function sendRequest() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "Signup"? 'signup':'signin'}`,authInput)
            const jwt = response.data.jwt
            localStorage.setItem("token",jwt)
            navigate("/")
        } catch(e){
            if(type==="Signin"){
                alert("Error! Ensure you have account created")
            }
            console.log("Signup error : ",e);
        }
    }

    return <div className="grid-cols-1 lg:grid-cols-2 flex h-screeen w-screeen" >
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-screem sm:w-1/2">
            <div className="text-3xl font-bold text-center">
                {
                    type === "Signup" ? "Create an account": "Account Login"
                }
            </div>
            {
                type === "Signup" ? <div className="text-slate-400 mt-2 text-center">Already have an account? <Link className="underline" to="/signin"  >Login</Link> </div>
                : <div className="text-slate-400 mt-2 text-center">New User? <Link className="underline" to="/signup">Sign up</Link> </div>
            }
            
            {
                type === "Signup" ? <InputAuth label="First Name" placeholder="John" type="text" onchange={(e)=>{
                    e.persist();
                    setAuthInput({
                        ...authInput,
                        name: e.target.value
                    })
                    
                }} /> : ""
            }
            
            <InputAuth label="Email" placeholder="johndoe@test.com" type="text" onchange={(e)=>{
                setAuthInput({
                    ...authInput,
                    email: e.target.value,
                })

            }} />
            <InputAuth label="Password" placeholder="" type="password" onchange={(e)=>{
                setAuthInput({
                    ...authInput,
                    password: e.target.value,
                })

            }} />
            <ButtonAuth onclick={()=>{
                sendRequest()
            }} name={type} />
        </div>
    </div>
    <div className="h-screen w-screen justify-center items-center bg-slate-100 hidden lg:flex ">
        <Quotes/>
    </div>
</div>
}