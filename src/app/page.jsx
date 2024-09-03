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
            <Card className="w-[40rem] self-center">
                <CardContent className="flex justify-center">

                    <div className="flex flex-col gap-10 my-14">
                        <img src="/assets/logo.png" className="w-48 h-48 self-center"/>

                        <span className="self-center font-bold text-5xl">Pack Planner</span>

                        <div className="flex flex-col gap-2">
                            {authProviders.map((provider, index) => (
                                <Button onClick={() => {signIn(provider.value, {callbackUrl: `${location.href}/packs`})}} variant="outline" className="flex gap-5 p-7 w-[25rem] self-center" key={index}>
                                    <img src={provider.icon} className="h-8"/>
                                    <span className="text-2xl">
                                        Log in with {provider.name}
                                    </span>
                                </Button>
                            ))}
                        </div>

                    </div>

                </CardContent>
            </Card>
        </div>
    )

}