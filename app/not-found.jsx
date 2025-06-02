import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-red-400">404</h1>
      <p className="text-xl mt-4">Oops! The page you're looking for does not exist.</p>
      <Link href={"/onboarding"} className="my-6">
         <Button variant={"outline"}> Go Back Home</Button>
      </Link>
      
    </div>
    )
}
