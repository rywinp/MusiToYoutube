import { Castoro } from "@next/font/google"

const castoro = Castoro({
    subsets: ['latin'],
    weight: ["400"],
})

export default function Header() {
    return (
        <div className={`flex justify-center`}>
            <h1>Musi To YouTube Service</h1>
        </div>
    );
}