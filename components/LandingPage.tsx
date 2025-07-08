'use client';

import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function LandingPage() {
    return (
        <main className="flex items-center p-10 gap-24 animate-fade-in max-md:flex col">
            <section className="flex flex-col items-center">
                <h1>Your time, prefectly planned</h1>
                <p>Join millions of professionals who easily book meetings with the #1 scheduling tool.</p>
            </section>

            <div className="mt-3">
                <SignIn
                routing="hash" //keeps sign-in UI on the same page using hash routing
                appearance={{
                    baseTheme: neobrutalism
                }}
                />
            </div>
        </main>
    )
}