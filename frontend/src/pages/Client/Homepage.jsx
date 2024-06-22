import {
    Navbar,
    HeroSection,
    Services,
    Video,
    Form,
    About,
    Footer
} from '../../components/landingpage/component';

const Homepage = ({setLoading}) => {
  console.log('homepage')
    return (
      <>
        <Navbar/>     
        <main>
            <article>
                <HeroSection/>
                <Services />
                <Video />
                <Form setLoading={setLoading} />
                <About />
            </article>
        </main>
        <Footer/>
      </>
    );
  };
  
  export default Homepage;
  