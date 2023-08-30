import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../features/userSlice"

export default function NewLog(){
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault();

        dispatch(login({
                name:name,
                email:email,
                password:password,
                loggedIn: true,
            })
        )
    }
    
    return(
        <div className="flex flex-col justify-center h-fit w-fit relative top-48">
            <h1 className="font-extrabold text-black text-lg">LOGIN</h1>
            <form className="flex flex-col justify-center h-[18rem] w-[25rem]" onSubmit={(e)=> handleSubmit(e)}>
                <input value={name} onChange={(e)=> setName(e.target.value)}
                    className="border-2 active:border-none rounded-md bg-white w-full p-[0.85rem] h-[3.5rem] shadow-inner m-[0.45rem]" type="text" placeholder="username"/>
                <input value={email} onChange={(e)=> setEmail(e.target.value)}
                    className="border-2 rounded-md bg-white w-full p-[0.85rem] h-[3.5rem] shadow-inner m-[0.45rem]" type="email" placeholder="useremail"/>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}
                    className="border-2 rounded-md bg-white w-full p-[0.85rem] h-[3.5rem] shadow-inner m-[0.45rem]" type="password" placeholder="userpassword"/>
                <button className="w-full rounded-md mt-[0.55rem] m-[0.45rem] bg-black p-[0.85rem] text-white font-semibold text-sm">Login</button>
            </form>
        </div>
    )
}