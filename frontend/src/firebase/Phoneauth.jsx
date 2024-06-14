import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/material.css";
import { auth } from "./setup";
const Phoneauth = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState(null);

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser(confirmation);
      console.log(confirmation)
    } catch (error) {
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await user.confirm(otp);
      console.log(user);
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="phoneSignin absolute top-[30%] left-[40%] flex gap-[10px]
      justify-center align-center flex-col"
      >
        <PhoneInput
          country={"ph"}
          value={phone}
          onChange={(phone) => {
            setPhone("+" + phone);
          }}
          countryCodeEditable={false}
          masks={{ ph: "... ... ...." }}
        />

        <button
          onClick={sendOtp}
          type="button"
          class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Send Otp
        </button>
        <div className="recaptcha" id="recaptcha"></div>
        <div className="enterOtp grid place-conte
        
        
        t-center">
          <input
            type="text"
            onChange={(e) => {
              setOtp(e.currentTarget.value);
            }}
            class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="This is placeholder"
          />
          <button
            onClick={verifyOtp}
            type="button"
            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </>
  );
};

export default Phoneauth;
