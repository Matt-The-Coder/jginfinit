const About = () => {
  return (
    <>
      <section aria-label="about" className="section about h-[100vh] flex items-center justify-center" id="about">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div class="hide_2">
              <img
                class="rounded-xl"
                src="/images/Website/2.jpg"
                alt="Image Description"
              />
            </div>

            <div class="mt-5 sm:mt-10 lg:mt-0 hide_3">
              <div class="space-y-6 sm:space-y-8">
                <div class="space-y-2 md:space-y-4">
                  <h2 class="font-bold text-3xl lg:text-4xl text-primary_red dark:text-neutral-200">
                    ABOUT US
                  </h2>
                  <p className="text-[3vh] font-bold text-paragraph_black">
                    JG Infinit Insurance Agency
                  </p>
                  <p class="text-gray-500 dark:text-neutral-500">
                    We want to be more than just an insurance company agency; we
                    want to be a reliable partner helping to protect your
                    future. We are the go-to option for non-life insurance needs
                    because of our everlasting commitment to quality and
                    unshakable dedication to our clients.
                  </p>
                </div>

                <ul class="space-y-2 sm:space-y-4">
                  <li class="flex space-x-3">
                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        class="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      <span class="font-bold">Easy & fast</span> designing
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        class="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      Powerful <span class="font-bold">features</span>
                    </span>
                  </li>

                  <li class="flex space-x-3">
                    <span class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        class="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <span class="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                      User Experience Design
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
