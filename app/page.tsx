import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import appConfig from "@/settings";
import Image from "next/image";
import Navbar from '@/components/Navbar/index'
import { Links } from "@/settings/navigation";
import Footer from '@/components/Footer/Footer'
import SectionContact from '@/components/main/Contact'
import Heardeur from '@/components/main/Heardeur'
import NosStat from '@/components/main/NosStat'
import Timeline from '@/components/main/Timeline'
// import Temoignage from '@/components/main/temoingnage'
import About from "@/components/main/About";
import Formation from "@/components/main/Formation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <section>
      <Navbar Links={Links}/>
      <div className="pt-20"><Heardeur /></div>
      <div className='container pt-24'>
        <NosStat />
        <Formation />
        <About />
        {/* <Timeline /> */}
        {/* <Temoignage />  */}
        <SectionContact /> 
        <Footer />
      </div>
    </section>
  )
}
