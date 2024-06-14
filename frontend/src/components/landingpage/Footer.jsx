import React from "react";

const Footer = React.memo(() => {
  return (
    <>
      <section id="contact">
        <footer class="mt-auto bg-primary_red w-full dark:bg-neutral-950">
          <div class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
              <div class="col-span-full lg:col-span-1">
                <a
                  class="flex-none text-4xl font-bold text-white"
                  href="#"
                  aria-label="Brand"
                >
                  JG Infinit
                </a>
                <p className="footer-brand-text text-white py-5">
                  Get our insurance for the best possible coverage at the most
                  affordable cost.
                </p>
                <div className="wrapper flex gap-5 py-5">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                   style={{ height: "34px", width: "34px" }}
                  >
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <path
      d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#DB6C27"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />{" "}
  </g>
</svg>

                  <ul className="footer-brand-list flex flex-col gap-5">
                    <li>
                      <p className="footer-brand-title text-white">
                        Monday - Friday
                      </p>
                      <p className="text-white">8:00Am - 5:00Pm</p>
                    </li>
                    <li>
                      <p className="footer-brand-title text-white">
                        Saturday - Sunday
                      </p>
                      <p className="text-white">Closed</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-span-1">
                <h4 class="font-semibold text-gray-100 text-2xl">Contact Us</h4>

                <div class="mt-3 grid space-y-3">
                  <p className="w-[160px]">
                    <a
                      class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                      href="#"
                    >
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22.0003C17.5228 22.0003 22 19.9856 22 17.5003C22 16.2337 20.837 15.0892 18.9654 14.2715C17.8233 16.3673 16.0817 18.1738 13.8695 19.1192C12.6804 19.6274 11.3196 19.6274 10.1305 19.1192C7.91828 18.1738 6.17666 16.3673 5.03458 14.2715C3.16295 15.0892 2 16.2337 2 17.5003C2 19.9856 6.47715 22.0003 12 22.0003Z"
                          fill="#DB6C27"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 8.51464C5 4.9167 8.13401 2 12 2C15.866 2 19 4.9167 19 8.51464C19 12.0844 16.7658 16.2499 13.2801 17.7396C12.4675 18.0868 11.5325 18.0868 10.7199 17.7396C7.23416 16.2499 5 12.0844 5 8.51464ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
                          fill="#DB6C27 "
                        />
                      </svg>
                      ETY Building 10th Floor Quintin Paredes Binondo, Manila
                    </a>
                  </p>
                  <p>
                    <a
                      class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                      href="#"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                          fill="#DB6C27"
                        />
                        <path
                          d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z"
                          fill="#DB6C27"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z"
                          fill="#DB6C27"
                        />
                      </svg>
                      +63 920-682-9269
                    </a>
                  </p>
                  <p>
                    <a
                      class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                      href="#"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60271 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986Z"
                          fill="#DB6C27"
                        />
                      </svg>
                      jginfinit.hr@gmail.com
                    </a>
                    {/* <span class="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                      We're hiring
                    </span> */}
                  </p>
                  <p>
                    <a
                      class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                      href="#"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60271 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986Z"
                          fill="#DB6C27"
                        />
                      </svg>
                      jginfinitinsurance@gmail.com
                    </a>
                    {/* <span class="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                      We're hiring
                    </span> */}
                  </p>
                </div>
              </div>

              <div class="col-span-1 pl-14">
                <h4 class="font-semibold text-2xl text-gray-100">Our links</h4>

                <div class="mt-3 grid space-y-3">
                  <p>
                    <a
                      class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                      href="/#home"
                    >
                      Home
                    </a>
                  </p>
                  <p>
                    <a
                      class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                      href="/#about"
                    >
                      About Us
                    </a>
                  </p>
                  <p>
                    <a
                      class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                      href="/#services"
                    >
                      Services
                    </a>
                  </p>
                  <p>
                    <a
                      class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200"
                      href="/#contact"
                    >
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>

              <div class="col-span-2">
                <h4 class="font-semibold text-2xl text-gray-100 mb-4">
                  Our Location
                </h4>

                <iframe
                  className="rounded-lg w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0045085439247!2d120.97323077484394!3d14.598818877120792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cb003a64c801%3A0xbf55734b7978b627!2sJG%20Infinit%20Insurance%20Agency!5e0!3m2!1sen!2sph!4v1713924027162!5m2!1sen!2sph"
                  width={340}
                  height={300}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
              <div class="flex justify-between items-center">
                <p class="text-sm text-white  dark:text-neutral-400">
                  © 2024. JG Infinit Insurance Agency. All rights reserved.
                </p>
              </div>

              <div>
                <a
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                </a>
                <a
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>

                <a
                  class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
});

export default Footer;
