import Image from "next/image";
import Header from "@/components/header-app"
import { InputWithButton } from "@/components/input-button-app";
import BehindTheScene from "@/components/bts-app";
import Footer from "@/components/footer-app";

export default function Home() {
  return (
<div className="flex flex-col items-center w-full bg-customOrangeLight min-h-screen">
  <Header/>
  <InputWithButton description={"Musi Playlist URL"}/>

  <section className="flex w-full my-16 px-9 justify-center">
    <BehindTheScene/>
  </section>
  
  <Footer/>
</div>

  );
}
