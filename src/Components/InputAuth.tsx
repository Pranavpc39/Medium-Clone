import { ChangeEvent } from "react";

interface InputAuthProps  {
    label: string;
    placeholder: string;
    type: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void
};

export const InputAuth = ({label, placeholder,type,onchange}: InputAuthProps)=>{
    return <div className="mt-5">
        <label 
            htmlFor={label}
            className="block mb-2 text-sm font-medium text-gray-900"
        >
            {label}
        </label>
        <input 
            type={type} 
            id={label}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder={placeholder}
            required 
            onChange={onchange}
        />
    </div>
}