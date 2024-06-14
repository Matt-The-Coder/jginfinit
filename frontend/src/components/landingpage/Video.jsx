import { useRef, useEffect } from "react";
const Video = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <>
      <section className="h-[70vh] md:h-[100vh] mt-0 md:mt-10 ">
        <div className="relative overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 hide ">
            <div className="max-w-2xl text-center mx-auto ">
              <h1 className="block text-3xl font-bold text-primary_red sm:text-4xl md:text-5xl dark:text-white">
                COMPANY VIDEO
              </h1>
              {/* <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              Build your business here. Take it anywhere.
            </p> */}
            </div>

            <div className="mt-0 md:mt-10 relative max-w-5xl mx-auto">
              <div className="flex justify-center w-full object-cover h-96 sm:h-[480px]  bg-no-repeat bg-center bg-cover rounded-xl">
                <video
                  ref={vidRef}
                  className="h-full rounded-xl"
                  src="/Videos/JGtour.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>

              <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
                <div className="bg-white size-48 rounded-lg dark:bg-neutral-900"></div>
              </div>

              <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                <div className="bg-white size-48 rounded-full dark:bg-neutral-900"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
