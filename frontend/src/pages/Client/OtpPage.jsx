import * as React from "react";
import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PinInput from 'react-pin-input';
import axios from "axios";
const OtpPage = ({user}) => {
  const hostServer = import.meta.env.VITE_HOSTSERVER
  const [verification, setVerification] = useState(null)
  const [otp, setOtp] = useState("");

  // const getVerification = async () => {
  //   try {
  //     const res = await axios.get(`${hostServer}/otpVerification`)
  //     setVerification(res.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const verifyOtp = async (e) => {
    try {
      e.preventDefault()
      console.log(user)
      const res = await user.confirm(otp)
      console.log(res)
      alert("success")
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{

    console.log(otp)
  }, [otp])
  return (
    <>
      <div className={`p-4 sm:p-10`}>
        <>
          {/* Hero */}
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid */}
            <div className="sm:flex sm:flex-row  md:justify-center flex flex-col">
              <div>
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                  <span className="text-primary_red">SMS </span>
                  
                </h1>
                <TypeAnimation
                className="block font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white"
      sequence={[
        'VERIFICATION',
        1000,
        'VERIFICATION',
        1000,
      ]}
      wrapper="h1"
      speed={50}
      style={{ fontSize: '2.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                  Hand-picked professionals and expertly crafted components,
                  designed for any kind of entrepreneur.
                </p>
                <form onSubmit={(e)=>{verifyOtp(e)}}>
                  <div className="flex space-x-3 mt-10 items-center justify-center" data-hs-pin-input="">
                  <PinInput 
                   className="block border w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-center border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
  length={6} 
  initialValue=""
  secret
  secretDelay={100} 
  onChange={(value, index) => {setOtp(value)}} 
  type="numeric" 
  inputMode="number"
  style={{padding: '10px', borderRadius:"10px"}}  
  inputStyle={{borderColor: '#800000'}}
  inputFocusStyle={{borderColor: 'blue'}}
  onComplete={(value, index) => {}}
  autoSelect={true}
  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
/>
                  
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-primary_red text-white py-3 rounded-lg mt-6 hover:bg-red-800 duration-300">Submit</button>
                  </div>
                </form>
              </div>
              {/* End Col */}
              <div className="relative ">
                <img
                  className="w-full rounded-md"
                  src="/images/Website/flaticon/padlock.gif"
                  alt="Image Description"
                />

                {/* SVG*/}
                <div className="absolute bottom-0 start-0">
                  <svg
                    className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900"
                    width={630}
                    height={451}
                    viewBox="0 0 630 451"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={531}
                      y={352}
                      width={99}
                      height={99}
                      fill="currentColor"
                    />
                    <rect
                      x={140}
                      y={352}
                      width={106}
                      height={99}
                      fill="currentColor"
                    />
                    <rect
                      x={482}
                      y={402}
                      width={64}
                      height={49}
                      fill="currentColor"
                    />
                    <rect
                      x={433}
                      y={402}
                      width={63}
                      height={49}
                      fill="currentColor"
                    />
                    <rect
                      x={384}
                      y={352}
                      width={49}
                      height={50}
                      fill="currentColor"
                    />
                    <rect
                      x={531}
                      y={328}
                      width={50}
                      height={50}
                      fill="currentColor"
                    />
                    <rect
                      x={99}
                      y={303}
                      width={49}
                      height={58}
                      fill="currentColor"
                    />
                    <rect
                      x={99}
                      y={352}
                      width={49}
                      height={50}
                      fill="currentColor"
                    />
                    <rect
                      x={99}
                      y={392}
                      width={49}
                      height={59}
                      fill="currentColor"
                    />
                    <rect
                      x={44}
                      y={402}
                      width={66}
                      height={49}
                      fill="currentColor"
                    />
                    <rect
                      x={234}
                      y={402}
                      width={62}
                      height={49}
                      fill="currentColor"
                    />
                    <rect
                      x={334}
                      y={303}
                      width={50}
                      height={49}
                      fill="currentColor"
                    />
                    <rect x={581} width={49} height={49} fill="currentColor" />
                    <rect x={581} width={49} height={64} fill="currentColor" />
                    <rect
                      x={482}
                      y={123}
                      width={49}
                      height={49}
                      fill="currentColor"
                    />
                    <rect
                      x={507}
                      y={124}
                      width={49}
                      height={24}
                      fill="currentColor"
                    />
                    <rect
                      x={531}
                      y={49}
                      width={99}
                      height={99}
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {/* End SVG*/}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Hero */}
        </>
      </div>
    </>
  );
};

export default OtpPage;
