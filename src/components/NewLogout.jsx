import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

const NewLogout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleLogout = (e) =>{
    e.preventDefault();
    dispatch(logout())
  }  
  return (
    <div className='flex flex-col justify-center w-fit'>
        <h1  className='text-xl font-semibold text-black'>Welcome <span className='text-violet-700'>{user.name}</span></h1>
        <button onClick={(e)=>{handleLogout(e)}} 
            className='w-[23rem] text-md text-white font-semibold rounded-md p-[0.85rem] mt-[1rem] bg-black'>Logout</button>
    </div>
  )
}

export default NewLogout