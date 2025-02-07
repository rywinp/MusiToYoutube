import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-orange-50 border-2 border-black rounded-lg p-4 m-9">
            <div className="relative mx-auto max-w-screen-xl px-4 ">

                <div className="lg:flex lg:items-end lg:justify-between items-center">

                    <div className="mr-5">

                        <p className="max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                        {`Developed by Rywin Patcharaput.
                        If you would like to contact me, click here to reach out anytime!`}
                        </p>
                    </div>


                    <Link href={"https://www.linkedin.com/in/rywinp/"} className="mr-4 hover:opacity-95">
                        <Image src={"/linkedin.png"} alt="LinkedIn Icon" width={50} height={50} className=""/>
                    </Link>



                    <Link href={"mailto:rywinp@umich.edu"} className="ml-4 hover:opacity-95">
                        <Image src={"/gmail.png"} alt="Gmail Icon" width={55} height={55} className=""/>
                    </Link>

                </div>
            </div>
        </footer>
    );
}