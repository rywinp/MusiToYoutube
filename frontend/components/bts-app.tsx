"use client";


import { ArrowRight } from "lucide-react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"

import { Castoro } from "next/font/google";
import Image from "next/image";

const castoro = Castoro({
    subsets: ['latin'],
    weight: ["400"],
})


export default function BehindTheScene() {
    return (
        <div className="flex flex-col items-center bg-orange-50 border-2 border-black p-4 rounded-lg">

        <div className={`flex justify-center ${castoro.className}`}>
            <h1 className="text-4xl lg:text-5xl text-center text-customOrange text-shadow-black-border-1 mb-3">System Design</h1>
        </div>

        <Image src={"/system-design.png"} alt="System Design Icon" width={150} height={150} className="mb-3">

        </Image>

        <AlertDialog>
        <AlertDialogTrigger>
        <div className="bg-black text-white py-3 px-7 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600">
            View
        </div>

        </AlertDialogTrigger>
        <AlertDialogContent className="bg-orange-15 border-4 border-black">
            <AlertDialogHeader>
            <AlertDialogTitle>
                <span className="text-2xl">System Design</span>
            </AlertDialogTitle>
            <AlertDialogDescription>
                <div className="flex justify-between items-center">
                    <div className="w-1/4 flex flex-col items-center">
                        <Image src={"/musi.png"} alt={"Google Icon"} width={125} height={125} className="mt-12 mb-4"/>
                        <span className="mt-1">{`Parse the user's Musi playlist to gather the Youtube
                    URL link for each music video.`}</span>
                    </div>  

                    <ArrowRight className="text-black scale-150"/>

                    <div className="w-1/4 flex flex-col items-center">
                        <Image src={"/google.png"} alt={"Google Icon"} width={600} height={100} className="mt-14 mb-4"/>
                        <span className="mt-4">{`Request authorization to user's YouTube account using 
                    Google's OAuth 2.0.`}</span>
                    </div>  


                    <ArrowRight className="text-black scale-150"/>

                    <div className="w-1/4 flex flex-col items-center -my-9">
                        <Image src={"/youtube.webp"} alt={"YouTube Icon"} width={1000} height={1000} className="mb-2"/>
                        <span className="-mt-16">{`Create a new YouTube playlist & insert the
                    parsed music video(s) into the user's account.`}</span>
                    </div>  
                </div>
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>
                Close
            </AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
        </div>
    );
}