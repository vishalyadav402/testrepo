import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelplineSection from "./components/HelpLineSection";
import Navbar from "./components/Navbar";
import AboutUs from "./components/About";
import OutreachSection from "./components/OutreachSection";

export default function Home() {
  return (
    <div>
      <Header/>
      <HelplineSection/>
      <Navbar/>
      <Image src={"/Frame 1332.png"} height={320} width={1238} className="w-full object-contain" alt="full banner image"></Image>
      <AboutUs/>
      <OutreachSection/>
      <Footer/>
    </div>
  );
}
