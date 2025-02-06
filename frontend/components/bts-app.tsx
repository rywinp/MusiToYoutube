"use client";

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
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
        </div>
    );
}