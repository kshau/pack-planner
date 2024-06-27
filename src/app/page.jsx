"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { signIn } from "next-auth/react"

export default function Home() {

    const authProviders = [
        {
            name: "Google", 
            value: "google",
            icon: "/assets/auth-provider-icons/google.png"
        }, 
        {
            name: "Discord", 
            value: "discord",
            icon: "/assets/auth-provider-icons/discord.png"
        }, 
        {
            name: "Reddit", 
            value: "reddit",
            icon: "/assets/auth-provider-icons/reddit.png"
        }, 
    ]

    return (
        <div className="flex justify-center h-screen">
            <Card className="w-[40rem] h-[43rem] self-center">
                <CardContent className="flex justify-center">

                    <div className="flex flex-col gap-10 mt-14">
                        <img src="/assets/logo.png" className="w-48 h-48 self-center"/>

                        <span className="self-center font-bold text-5xl">Pack Planner</span>

                        <div className="flex flex-col gap-2">
                            {authProviders.map(provider => (
                                <Button onClick={() => {signIn(provider.value, {callbackUrl: `${location.href}/packs`})}} variant="outline" className="flex gap-5 p-7 w-[25rem] self-center">
                                    <img src={provider.icon} className="h-8"/>
                                    <span className="text-2xl">
                                        Log in with {provider.name}
                                    </span>
                                </Button>
                            ))}
                        </div>

                        <div className="px-10 text-center text-slate-400 bottom-0">
                            <span>By signing in you confirm that you have read and understood our </span>
                            <a href="/terms-of-service" className="underline">terms of service</a>
                            <span> and our </span>
                            <a href="/privacy-policy" className="underline">privacy policy</a>
                            <span>.</span>
                        </div>

                    </div>

                </CardContent>
            </Card>
        </div>
    )

}