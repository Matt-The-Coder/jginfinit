
import { useEffect, useState } from "react";
import {RingLoader} from 'react-spinners'
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import "./index.css";
import "preline/preline";
import {Homepage, Services, OtpPage} from './pages/Client/components'
import {Quotepage, AdminDashboard, Carlist, Login} from './pages/Admin/components'
import Notfound from "./pages/Notfound";
import Phoneauth from "./firebase/Phoneauth";
import { Adminlayout } from "./layout/Admin/Adminlayout";
function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false)
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.classList.add('show_2');
        } else {
          entry.target.classList.remove('show');
          entry.target.classList.remove('show_2');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hide');
    const hiddenElements2 = document.querySelectorAll('.hide_2');
    const hiddenElements3 = document.querySelectorAll('.hide_3');
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements2.forEach((el) => observer.observe(el));
    hiddenElements3.forEach((el) => observer.observe(el));
    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []); 
  return (
    <>
      {loading && 
    <>
    <div className="grid place-items-center w-lvw h-lvh absolute top-0">
<RingLoader
    className="!fixed z-[60] "
  color="#800000"
  size={"15em"}
/>
</div>
<div className="loading fixed bg-neutral-600 w-lvw h-lvh top-0 z-[60] opacity-45"></div>
    </>}
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/phoneauth' element={<Phoneauth/>} />
      <Route path='/verify' element={<OtpPage/>} />
      <Route path='/*' element={<Notfound/>} />  

      <Route element={<Adminlayout/>}>
      <Route path='/admin' element={<AdminDashboard  setLoading={setLoading}/>} />
      <Route path='/admin/quote/:carParams' element={<Quotepage/>} />
      <Route path="/admin/car/:brand" element={<Carlist  setLoading={setLoading}/>}/>
        </Route> 
        <Route path="/admin/login" element={<Login  setLoading={setLoading}/>}/>
    </Routes>
    </>
  );
}

export default App;
