import {
    Navbar,
    HeroSection,
    Services,
    Video,
    Form,
    About,
    Footer
} from '../../components/landingpage/component';

const Homepage = () => {
    return (
      <>
        <Navbar/>     
        <main>
            <article>
                <HeroSection/>
                <Services />
                <Video />
                <Form />
                <About />
            </article>
        </main>
        <Footer/>
      </>
    );
  };
  
  export default Homepage;
  