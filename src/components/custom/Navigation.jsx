import { signOut, useSession } from "next-auth/react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";

function NavigationItem(props) {

    const {link, children} = props;

    return (
        <a href={link} className="text-lg hover:underline p-2 transition-all">
            {children}
        </a>
    )

}

export function Navigation(props) {

    const {children} = props;

    const { data: session } = useSession();

    return (

        <div>

            <div className="w-full h-16 bg-background fixed top-0 border-b flex gap-5 p-3 pl-5 z-[1]">

                <img className="w-10 h-10" src="/assets/logo.png"></img>

                <NavigationItem link="/">Home</NavigationItem>
                <NavigationItem link="/packs">Packs</NavigationItem>
                <NavigationItem link="/about">About us</NavigationItem>
                <Popover>
                    <PopoverTrigger asChild>
                        <img src={session ? session.user.image : "/assets/default_avatar.png"} className="w-10 h-10 rounded-full absolute right-5 hover:cursor-pointer border" />
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-row gap-3 whitespace-nowrap justify-end w-fit">
                        <img src={session ? session.user.image : "/assets/default_avatar.png"} className="w-10 h-10 rounded-full border" />
                        <span className="mt-2 text-xl">
                            {session ? session.user.name : "Signed out"}
                        </span>
                        {session ? (
                            <Button variant="destructive" className="ml-3" onClick={() => {signOut({ callbackUrl: '/', redirect: true })}}>Sign out</Button>
                        ) : (
                            <Button  className="ml-3" onClick={() => {location.href = "/"}}>Sign in</Button>
                        )}
                    </PopoverContent>
                </Popover>
            </div>

            <div className="mt-20">
                {children}
            </div>

            <div className="m-5 text-slate-400 mt-20">
                <span>Site by </span>
                <a href="https://shaurya.pro" className="underline">Shaurya Kumar</a>
            </div>

        </div>
        
    )

}