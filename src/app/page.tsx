import { Facilities, Gallary, Footer, Header, Hero, Contact } from "./components";


export default function Home() {
  return (
    <>
    {/* // <div className="container mx-auto"> */}
      <Header/>
      <Hero/>
      <Facilities/>
      <Gallary/>
      <Contact/>
      <Footer/>
    {/* // </div> */}
    </>
  );
}
