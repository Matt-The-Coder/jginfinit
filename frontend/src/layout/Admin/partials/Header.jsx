import React from "react"
import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth"
export const Header = React.memo(() => {

    const auth = getAuth()

    const handleSignOut = async () => {
        try {
            const result = await signOut(auth)
            location.replace('/admin/login')
        } catch (error) {
            console.log(error)
        }
    }
    return(<>
    
    <div className="header w-full sticky top-0 border-b border-b-neutral-300 h-20 bg-white z-10" >
        <div className="flex w-full h-full container">
            <div className="flex justify-start w-1/2 items-center ml-4 container2">
                <Link to="/admin">
                <img className=" object-contain h-24 w-24" src="/public/images/img/logo_red.png" alt="" />
                </Link>
           
            </div>
            <div className="flex justify-end w-1/2 items-center mr-4 account">
            <button 
            onClick={handleSignOut}
            className="bg-primary_red text-white py-1 px-3 rounded-md font-semibold uppercase text-xs">
            Logout
            </button>
                
            </div>
        </div>
    </div>
    </>)
})