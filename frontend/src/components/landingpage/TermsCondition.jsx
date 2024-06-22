const TermsCondition = () => {
  return (
    <>

      <div
        id="hs-scroll-inside-body-modal"
        class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
          <div class="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 class="font-bold text-primary_red dark:text-white ">
                Terms & Conditions
              </h3>
              <button
                type="button"
                class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                data-hs-overlay="#hs-scroll-inside-body-modal"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="flex-shrink-0 size-4"
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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div class="p-4 overflow-y-auto">
              <div class="space-y-4">
                <div>
                  <p class="mt-1 text-gray-800 dark:text-neutral-400">
                  1. Acceptance of Terms By accessing and using JG Infinit Insurance, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using JG Infinit Insurance’s particular services, you shall be subject to any posted guidelines or rules applicable to such services.

                  </p>
                </div>

                <div>
                  <p class="mt-1 text-gray-800 dark:text-neutral-400">
                  2. Modification of Terms JG Infinit Insurance reserves the right to change these terms from time to time without notice. You acknowledge and agree that it is your responsibility to review JG Infinit Insurance’s terms periodically to familiarize yourself with any modifications.
                  </p>
                </div>

                <div>
                  <p class="mt-1 text-gray-800 dark:text-neutral-400">
                  3. Privacy Policy Your use of JG Infinit Insurance is also governed by our Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                </div>
                
                <div>
                  <p class="mt-1 text-gray-800 dark:text-neutral-400">
                  4. Limitation of Liability JG Infinit Insurance and its components are offered for informational purposes only; JG Infinit Insurance shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                data-hs-overlay="#hs-scroll-inside-body-modal"
              >
                Close
              </button>
              <button
                type="button"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-primary_red text-white shadow-sm hover:bg-primary_red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                data-hs-overlay="#hs-scroll-inside-body-modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsCondition;
