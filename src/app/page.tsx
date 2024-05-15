import { Facilities, Gallary, Footer, Header, Hero, Contact, SecondaryHero } from "./components";


export default function Home() {
  return (
    <>
    {/* // <div className="container mx-auto"> */}
      <Header/>
      <Hero/>
      <SecondaryHero/>
      <Facilities/>
      <Gallary/>
      <Contact/>
      <Footer/>
    {/* // </div> */}
    </>
  );
}
