import Image from "next/image";
import Header from "@/components/header-app"
import { InputWithButton } from "@/components/input-button-app";
import BehindTheScene from "@/components/bts-app";

export default function Home() {
  return (
<div className="flex flex-col items-center w-full bg-customOrangeLight min-h-screen">
  <Header/>
  <InputWithButton description={"Musi Playlist URL"}/>

  <section className="flex flex-col lg:flex-row w-full my-20 px-9 items-center lg:justify-between bg-slate-300">
    <BehindTheScene/>
    <h1>Part 2</h1>
    <h1>Part 3</h1>
  </section>

  <footer>
    
  </footer>
</div>

  );
}
