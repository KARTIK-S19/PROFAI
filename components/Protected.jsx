import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";

const Protected = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <SignInButton />
        <p className="mt-4 text-gray-400">You must sign in to view this page.</p>
      </div>
    </SignedOut>
  </>
);

export default Protected;
