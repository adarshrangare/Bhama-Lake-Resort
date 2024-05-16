import { Facilities, Gallary, Footer, Header, Hero, Contact, SecondaryHero } from "./components";
import IntroVideo from "./components/IntroVideo/IntroVideo";


export default function Home() {
  return (
    <>
    {/* // <div className="container mx-auto"> */}
      <Header/>
      <Hero/>
      <IntroVideo/>
      <SecondaryHero/>
      <Facilities/>
      <Gallary/>
      <Contact/>
      <Footer/>
    {/* // </div> */}
    </>
  );
}
