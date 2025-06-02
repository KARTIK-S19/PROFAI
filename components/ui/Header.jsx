import React from 'react'
import { SignInButton , SignUpButton , SignedOut , SignedIn , UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './button'
import { LayoutDashboard, StarIcon, StarsIcon , ChevronDown, File, FileText, Pen, PenBox, GraduationCap } from 'lucide-react'
import { DropdownMenu , DropdownMenuTrigger , DropdownMenuLabel , DropdownMenuItem , DropdownMenuSeparator , DropdownMenuContent } from './dropdown-menu'
import { checkUser } from '@/lib/checkUser'


const Header = async () => {
  await checkUser();
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60 px-5 py-3 flex justify-between align-center'>

      <div>
        <Link href={"/"}>
          <h1 className='text-3xl'>PROFAI</h1>
        </Link>
      </div>


    <div className='flex gap-2 md:gap-7'>
      <div className='flex gap-2 md:gap-7'>
        <SignedIn>
          <Link href={"/dashboard"}>
          <Button variant="outline">
            <LayoutDashboard/>
             <span className='hidden md:block'>Industry Insights</span>
          </Button>
          </Link>


      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>
            <StarsIcon/>
             <span className='hidden md:block'>Growth Tools</span>
             <ChevronDown/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuLabel>Tools</DropdownMenuLabel>
        <DropdownMenuSeparator /> 
        <DropdownMenuItem className={"w-fit"}>
          <Link href={"/resume"} className='flex items-center gap-2'>
            <FileText className='h-4 w-4'/>
            <span className='text-sm'>Build Resume</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={"w-fit"}>
          <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
            <PenBox className='h-4 w-4'/>
            <span className='text-sm'>Cover Letter</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={"w-fit"}>
          <Link href={"/interview"} className='flex items-center gap-2'>
            <GraduationCap className='h-4 w-4'/>
            <span className='text-sm'>Interview prep</span>
          </Link>
        </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

        </SignedIn>
      </div>


      
      
      <SignedOut>
        <SignInButton afterSignInUrl="/onboarding" forceRedirectUrl='/onboarding'>
          <Button variant={"outline"}>Sign in</Button>
        </SignInButton>
      </SignedOut>
            <SignedIn>
              <UserButton 
              appearance={{
                elements:{
                  avatarBox:"w-15 h-15",
                  userButtonPopoverCard:"shadow-xl",
                  userPreviewMainIdentifier:"font-semibold"
                }
              }}
              afterSignOutUrl='/'
              />
            </SignedIn>
      </div>

    </header>
  )
}

export default Header
