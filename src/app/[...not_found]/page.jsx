"use client"

import { Navigation } from "@/components/custom/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Tent } from "lucide-react";

export default function PageNotFound() {

    return (
        <Navigation>
            <div className="flex justify-center">
                    <Card className="w-[35rem] self-center mb-36 mt-20">
                        <CardContent className="flex justify-center flex-col">
                            <span className="text-8xl mt-10 self-center">404</span>
                            <Tent className="self-center mt-10" size={130}/>
                            <span className="text-center mt-7 text-4xl">
                                Looks like you're camping in the wrong spot.
                            </span>
                            <Button className="flex gap-4 m-10 mt-20 p-7 w-fit self-center" onClick={() => {location.href = "/"}}>
                                <ArrowLeft size={40}/>
                                <span className="text-3xl">
                                    Return to Home
                                </span>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
        </Navigation>
        
    )

}