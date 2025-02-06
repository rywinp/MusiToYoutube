import { Castoro } from "next/font/google"

const castoro = Castoro({
    subsets: ['latin'],
    weight: ["400"],
})

export default function Header() {
    return (
        <div className={`flex justify-center ${castoro.className}`}>
            <h1 className="text-4xl lg:text-7xl text-center m-7 text-customOrange text-shadow-black-border-2">Musi To YouTube Service</h1>
        </div>
    );
}