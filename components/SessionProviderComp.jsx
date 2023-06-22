"use client"
import { SessionProvider } from "next-auth/react"

const SessionProviderComp = ({children})=>{
    return <SessionProvider>{children}</SessionProvider>
}

export default SessionProviderComp