import "./globals.css";
import {Inter} from "next/font/google"
import { ThemeProvider } from "next-themes";
import Header from "@/components/ui/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark , neobrutalism } from "@clerk/themes";



export const metadata = {
  title: "PROFAI - Ai Professor",
  description: "Generated by create next app"
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider suppressHydrationWarning appearance={{
      baseTheme: [dark],
    }}>
    <html lang="en">
      <body suppressHydrationWarning >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header/>

            {/* Main */}
            <main className="min-h-screen">{children}</main>

            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-400">
                <p>Made by AURA</p>
              </div>
            </footer>

          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
