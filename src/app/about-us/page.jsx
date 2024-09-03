"use client"

import { Navigation } from "@/components/custom/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUs() {

    const aboutSite = [
        {
            title: "What is Pack Planner?", 
            content: 
                <span>
                    Backpacking is an adventurous form of travel where individuals carry their essential belongings in a backpack, 
                    allowing them to explore various destinations with freedom and flexibility. 
                    It’s a popular activity for those who enjoy nature, hiking, and the thrill of self-sufficiency. 
                    To aid backpackers in their preparations, Pack Planner offers a comprehensive solution. 
                    Inspired by <a href="https://lighterpack.com" className="underline">LighterPack</a> and <a href="https://www.reddit.com/r/Ultralight/" className="underline">r/Ultralight</a>, 
                    This website enables users to create detailed lists of items needed for their backpacking trips, 
                    providing a seamless way to calculate the total weight and cost of their gear. Additionally, Pack Planner 
                    integrates with online stores, allowing users to search for and add products directly to their lists, 
                    ensuring they have everything they need for their journey.
                </span>
        }, 
    ]

    const aboutTeam = [
        {
            name: "Shaurya Kumar", 
            role: "Software Engineer",
            icon: "/assets/team-member-icons/shaurya-kumar.png", 
            url: "https://shaurya.pro"
        }, 
        {
            name: "Ved Mohan", 
            role: "Product Manager",
            icon: "/assets/team-member-icons/ved-mohan.png"
        }, 
        {
            name: "Shashank Jha", 
            role: "Graphic Designer",
            icon: "/assets/team-member-icons/shashank-jha.png"
        }
    ]

    return (
        <Navigation current="About us">

            {aboutSite.map((card, index) => (
                <Card className="m-5" key={index}>
                    <CardHeader>
                        <CardTitle>
                            {card.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg">
                        {card.content}
                    </CardContent>
                </Card>
            ))}

            <div className="flex mt-20 flex-col">

                <span className="text-5xl font-bold self-center">Our Team</span>

                <div className="flex flex-row justify-center mt-10 gap-10">
                    {aboutTeam.map((member, index) => (
                        <a className={`flex flex-col text-center ${member.url ? "hover:underline" : ""}`} href={member.url}  key={index}>
                            <img src={member.icon} className="w-[11rem] object-cover aspect-square rounded-full mb-5 self-center border border-4"/>
                            <span className="text-2xl font-bold">{member.name}</span>
                            <span className="text-lg">{member.role}</span>
                        </a>
                    ))}
                </div>

            </div>

        </Navigation>
    )

}