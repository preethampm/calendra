import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
            {/* <Image 
                src="/assets/logo.png"
                width={100}
                height={100}
                alt="Calendra Logo"
            /> */}

            <div className="mt-3">
                <SignIn />
            </div>
        </main>
    )
}