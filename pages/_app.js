import '@/styles/globals.css'
import { SignIn, UserButton } from '@clerk/clerk-react'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
export default function App({ Component, pageProps }) {
  return(

  
  <ClerkProvider>
    <SignedIn>
    <div class="ml-4 mt-4">
 <UserButton/>  </div>

    <Component {...pageProps} />
    </SignedIn>
    <SignedOut>
    <div class="flex items-center justify-center h-screen">
 <SignIn/>
 </div>

    </SignedOut>
    </ClerkProvider> 
    )
}

