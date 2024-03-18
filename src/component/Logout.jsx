// import React from 'react'

import { useContext } from "react"
import { AuthContext } from "../contects/AuthProvider"
import {useLocation,useNavigate} from 'react-router-dom'

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogout = () =>{

        logOut().then(() => {
            // Sign-out successful.
            alert("sign out successfull")
            navigate(from, {replace: true})
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button
                className=" capitalize px-8 z-30 py-4
                bg-rose-400 rounded-md text-white relative 
                font-semibold font-sans after:-z-20 after:absolute 
                after:h-1 after:w-1 after:bg-rose-800 after:left-5 
                overflow-hidden after:bottom-0 after:translate-y-full 
                after:rounded-md after:hover:scale-[300] after:hover:transition-all 
                after:hover:duration-700 after:transition-all after:duration-700 
                transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] 
                hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
                onClick={handleLogout}
            >
                logout
            </button>

        </div>
    )
}

export default Logout