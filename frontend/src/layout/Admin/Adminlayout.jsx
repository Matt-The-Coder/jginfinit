import { Outlet } from "react-router-dom"
import { Header } from "./partials/Header"
import { Footer } from "./partials/Footer"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useLayoutEffect } from "react"
export const Adminlayout = () => {

const auth = getAuth()

    const isLogin = () => {
        onAuthStateChanged(auth, (user)=> {
            if(!user){
                location.replace('/admin/login')
            }
        })
    }
    useLayoutEffect(()=>{
        isLogin()
    }, [])

    return(<>

    <Header/>
    <div>
    <Outlet/>
    </div>

    <Footer/>
    
    </>)
}