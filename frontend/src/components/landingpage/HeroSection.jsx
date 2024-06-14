const HeroSection = () => {
  console.log("HeroSection")
  return (
    <>
      <section id="home" className="mt-[120px]">
        <div className="shadow-xl hide_3">
          <img
            src="/images/Website/1.jpg"
            className="w-full hidden md:block"
            alt=""
          />
          <img
            src="/images/Website/half1.jpg"
            className="w-full md:hidden"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
