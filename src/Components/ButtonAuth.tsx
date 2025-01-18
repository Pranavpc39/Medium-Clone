import { MouseEvent } from "react"

interface ButtonAuthProps {
    name: string;
    onclick: (e : MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonAuth = ({name,onclick}: ButtonAuthProps) =>{
    return <button onClick={onclick} type="button" className="mt-5 w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
        {name}
    </button>
}