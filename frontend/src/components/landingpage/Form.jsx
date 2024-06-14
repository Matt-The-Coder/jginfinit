import { useEffect, useState } from "react";
import TermsCondition from "./TermsCondition";
import PhoneInput from "react-phone-input-2";
import { auth } from "../../firebase/setup";
import OtpPage from "../../pages/Client/OtpPage";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "react-phone-input-2/lib/material.css";
import axios from 'axios'
const Form = () => {
  const hostServer = import.meta.env.VITE_HOSTSERVER
  const [hidden, setHidden] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("")
  const [model, setModel] = useState(null)
  const [variant, setVariant] = useState("")
  const [year, setYear] = useState("")
  const [transmission, setTransmission] = useState("")
  const [phone, setPhone] = useState("")

  const getQuote = async (e) => {

    try {

      e.preventDefault()

      // const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      // const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setUser("confirmation");
      const verification = "confirmation"
      console.log(verification)
      
      const data = axios.post(`${hostServer}/otpData`, {
        name,
        model,
        variant,
        year,
        transmission,
        phone,
        ConfirmationResultImpl:verification
      })
      
    } catch (error) {
      console.log(error)
    }

  }


  useEffect(() => {

    console.log(model)
  }, [model])

  return (
    <>
    {hidden && <>
      <OtpPage user={user}/>
    </>}

      <section
        className="h-[155vh] md:h-[100vh] flex items-center justify-center bg-gray-50"
        id="quote"
      >
        <div className="relative  via-transparent dark:from-blue-950 dark:via-transparent">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
              <div className="">
                {/* <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          Preline: A vision for 2024
        </p> */}

                <div className="mt-4 md:mb-12 max-w-2xl">
                  <h1 className="mb-4 font-bold text-primary_red text-4xl lg:text-5xl dark:text-neutral-200">
                    MOTOR CAR INSURANCE
                  </h1>
                  <p className="text-gray-600 dark:text-neutral-400">
                    Comprehensive coverage that protects you financially if your
                    car gets damaged, stolen, or if you're involved in an
                    accident. It helps cover repair costs, medical expenses, and
                    liabilities.
                  </p>
                </div>

                <blockquote className="hidden md:block relative max-w-sm">
                  <svg
                    className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    />
                  </svg>

                  <div className="relative z-10">
                    <p className="text-xl italic text-gray-800 dark:text-white">
                      "With us, you are covered and safe."
                    </p>
                  </div>

                  <footer className="mt-3">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="size-8 rounded-full"
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                          alt="Image Description"
                        />
                      </div>
                      <div className="grow ms-4">
                        <div className="font-semibold text-gray-800 dark:text-neutral-200">
                          Gezer Cai
                        </div>
                        <div className="text-xs text-gray-500 dark:text-neutral-500">
                          Chief Executive Officer
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>

              <div>
                <form onSubmit={(e) => { getQuote(e) }}>
                  <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                    <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-neutral-900">
                      <div className="text-center">
                        <h1 className="block text-2xl font-bold text-primary_red dark:text-white">
                          GET A QUOTE
                        </h1>
                      </div>

                      <div className="mt-5">
                        <div>
                          <div className="relative">
                            <label htmlFor="" for="name">
                              Name
                            </label>
                            <input
                            required
                              value={name}
                              onChange={(e) => { setName(e.currentTarget.value) }}
                              id="name"
                              type="text"
                              className="mt-2 py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 "
                              placeholder="Enter your Name"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                          <div>
                            <label htmlFor="carModel">Car Model</label>
                            <div className="relative mt-2 ">
                              <select
                              required
                                value={model}
                                onChange={(e) => { setModel(e.currentTarget.value) }} className="py-3 px-4 pe-9 block w-full border-gray-200
                               rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                <option selected disabled>Select Model</option>
                                <option value="Vrand">Brand</option>
                                <option value="email">Email address</option>
                                <option>Description</option>
                                <option>User ID</option>
                              </select>

                            </div>
                          </div>
                          <div>
                            <label htmlFor="carModelVariant">
                              Car Model Variant
                            </label>
                            <div className="relative mt-2 ">
                              <select
                              required
                                value={variant}
                                onChange={(e) => { setVariant(e.currentTarget.value) }} className="py-3 px-4 pe-9 block w-full border-gray-200
                               rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                <option selected disabled>Select Variant</option>
                                <option value="Vrand">Brand</option>
                                <option value="email">Email address</option>
                                <option>Description</option>
                                <option>User ID</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="carModelVariant">
                              Car Model Year
                            </label>
                            <div className="relative mt-2 ">
                              <select value={year}
                              required
                                onChange={(e) => { setYear(e.currentTarget.value) }} className="py-3 px-4 pe-9 block w-full border-gray-200
                               rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                <option selected disabled>Select Year</option>
                                <option value="Vrand">Brand</option>
                                <option value="email">Email address</option>
                                <option>Description</option>
                                <option>User ID</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="carModelVariant">AT or MT</label>
                            <div className="relative mt-2 ">
                              <select id="hs-select-label"
                              required
                                value={transmission}
                                onChange={(e) => { setTransmission(e.currentTarget.value) }}
                                className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                                <option selected disabled>Select Transmission</option>
                                <option>AT</option>
                                <option>MT</option>

                              </select>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="relative mt-4">
                            <label htmlFor="" for="mobileNumber">
                              Mobile Number
                            </label>
                            <PhoneInput
                            required
                              value={phone}
                              onChange={(phone) => {
                                setPhone("+" + phone);
                              }}
                              specialLabel=""
                              inputStyle={{
                                width: "100%",
                                paddingTop: "10px",
                                paddingBottom: "10px",
                                marginTop: "8px ",
                              }}
                              id="phoneInput"
                              country={"ph"}
                              countryCodeEditable={false}
                              enableAreaCodes={["ph"]}
                              masks={{ ph: "... ... ...." }}
                            />
                          </div>
                        </div>
                        <div className="mt-5 flex items-center">
                          <div className="flex">
                            <input
                              id="remember-me"
                              name=""
                              required
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                          </div>
                          <div className="ms-3">
                            <label
                              for="remember-me"
                              className="text-sm dark:text-white"
                            >
                              I accept the{" "}
                              <span
                                className="cursor-pointer text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                                data-hs-overlay="#hs-scroll-inside-body-modal"
                              >
                                Terms & Conditions
                              </span>
                              <TermsCondition />
                            </label>
                          </div>
                          
                        </div>
                        <div className="recaptcha" id="recaptcha"></div>
                        <div className="mt-5">
                          <button
                            type="submit"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary_red text-white hover:bg-red-800 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Get a Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
