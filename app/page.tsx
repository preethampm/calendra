import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LandingPage from "@/components/LandingPage";

export default async function Home() {

  const user = await currentUser();
  // If the user is not authenticated, redirect to the landing page
  if(!user) return <LandingPage />;

  return redirect('/events')

}
