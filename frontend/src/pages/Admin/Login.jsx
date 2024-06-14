import { Link } from "react-router-dom"

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, useLayoutEffect } from "react";
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
const auth = getAuth();

  const isLogin =  () => {
    onAuthStateChanged(auth, (user)=>{
      if(user){
        location.replace('/admin')
      } 
    })
  }
  const signIn = async (e) => {
    e.preventDefault()
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      const data = res.user
      console.log(data)
      if(res.user){
        location.replace('/admin')
      }else{
        setError(true)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useLayoutEffect(()=>{
    isLogin()
  }, [])

  return (
    <>
      <div className="Login flex items-center justify-center h-lvh w-lvw bg-neutral-100">
        <div className="container bg-white h-[70%] w-[80%] lg:w-2/4 flex border-[1px] border-gray-200 border-solid rounded-md shadow-sm">
          <div className="section_1 w-1/2 px-2 hidden lg:block">
            <img src="/images/Website/half1.jpg" alt="Logo with description"
              className="object-contain h-full w-full " />
          </div>
          <div className="section_2 w-full lg:w-1/2">
            <div className=" bg-white border-l h-full  dark:bg-neutral-900 dark:border-neutral-700">
              <div className="p-4 sm:p-7 h-full">
                <div className="lg:hidden logo grid place-items-center">
                  <img src="/images/img/logo_red.png" alt="Logo" className="w-28 h-28" />
                </div>
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Login
                  </h1>

                </div>
                <div className="mt-5">

                  {/* Form */}
                  <form onSubmit={(e) => { signIn(e) }}>
                    <div className="grid gap-y-4">
                      {/* Form Group */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm mb-2 dark:text-white"
                        >
                          Email address
                        </label>
                        <div className="relative">
                          <input
                            onChange={(e) => { setEmail(e.currentTarget.value) }}
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            aria-describedby="email-error"
                          />
                          <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                            <svg
                              className="size-5 text-red-500"
                              width={16}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                          Please include a valid email address so we can get back to you
                        </p>
                      </div>
                      {/* End Form Group */}
                      {/* Form Group */}
                      <div>
                        <div className="flex justify-between items-center">
                          <label
                            htmlFor="password"
                            className="block text-sm mb-2 dark:text-white"
                          >
                            Password
                          </label>

                        </div>
                        <div className="relative">
                          <input
                            onChange={(e) => { setPassword(e.currentTarget.value) }}
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            required
                            aria-describedby="password-error"
                          />
                          <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                            <svg
                              className="size-5 text-red-500"
                              width={16}
                              height={16}
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                          </div>
                        </div>
                        <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                          8+ characters required
                        </p>
                      </div>
                      {/* End Form Group */}
                      <div className="forgot_password grid place-items-end">
                        <a
                          className="text-sm text-secondary_yellow decoration-2 hover:underline font-medium"
                          href="../examples/html/recover-account.html"
                        >
                          Forgot password?
                        </a>
                      </div>


                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary_red text-white hover:bg-[#900000] disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                  {/* End Form */}
                </div>
                <div className="h-auto text-end mt-5">
                  <a href="/">
                    <button type="submit">
                      <h2 className="text-sm font-semibold hover:underline">{"-->"} Back to Homepage</h2>
                    </button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default Login