// import React from 'react'

import { useContext } from "react"
import { AuthContext } from "../contects/AuthProvider"
import { useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  return (
    <> 
    <div className="h-screen flex flex-col justify-center items-center lg:mx-56">
      <div className="text-5xl font-bold px-24 my-3">Welcome {user.displayName}</div>
      <div className="flex justify-center ">
        <button className="m-2 px-4 py-2 bg-gray-200" onClick={()=>{navigate('/admin/dashboard/upload')}}>Add Book</button>
        <button className="m-2 px-4 py-2 bg-gray-200" onClick={()=>{navigate('/admin/dashboard/manage')}}>Manage Book</button>
      </div>
    </div>   
    </>
  )
}

export default Dashboard