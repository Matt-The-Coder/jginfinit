import {
    Navbar,
    HeroSection,
    Services,
    Video
} from '../components/landingpage/component';

const Homepage = () => {
    return (
      <>
        <Navbar/>     
        <main>
            <article>
                <HeroSection/>
                <Services />
                <Video />
            </article>
        </main>
      </>
    );
  };
  
  export default Homepage;
  