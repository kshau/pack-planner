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
        {
            title: "Terms of Service", 
            content: 
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl. Elit duis tristique sollicitudin nibh. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Pretium quam vulputate dignissim suspendisse. Posuere ac ut consequat semper viverra nam libero. Dictumst quisque sagittis purus sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Sed vulputate mi sit amet. Dolor sit amet consectetur adipiscing elit. Mollis aliquam ut porttitor leo a. Integer eget aliquet nibh praesent tristique magna sit amet purus. Ligula ullamcorper malesuada proin libero nunc consequat. Mauris cursus mattis molestie a iaculis. Suspendisse ultrices gravida dictum fusce. Augue mauris augue neque gravida in fermentum et.
                    <br/><br/>
                    Eu mi bibendum neque egestas. Eget dolor morbi non arcu risus quis. Eget nunc lobortis mattis aliquam faucibus. Mi quis hendrerit dolor magna eget est lorem. Placerat in egestas erat imperdiet sed euismod. Urna nec tincidunt praesent semper feugiat nibh sed. Erat velit scelerisque in dictum non consectetur. Elementum facilisis leo vel fringilla est ullamcorper eget. Est sit amet facilisis magna. Vulputate mi sit amet mauris.
                    <br/><br/>
                    Eget magna fermentum iaculis eu non. Blandit aliquam etiam erat velit scelerisque in dictum. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Euismod lacinia at quis risus sed. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Posuere urna nec tincidunt praesent. A diam maecenas sed enim ut sem viverra. Nunc aliquet bibendum enim facilisis gravida. Laoreet suspendisse interdum consectetur libero id faucibus. Augue lacus viverra vitae congue eu consequat. Adipiscing commodo elit at imperdiet dui. Auctor elit sed vulputate mi sit amet mauris commodo. Sapien nec sagittis aliquam malesuada bibendum arcu. Sit amet mattis vulputate enim nulla aliquet. Aliquet risus feugiat in ante. Id velit ut tortor pretium viverra suspendisse. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Ac ut consequat semper viverra nam libero justo laoreet sit.
                </span>
        }, 
        {
            title: "Privacy Policy", 
            content: 
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse interdum consectetur libero id faucibus nisl. Elit duis tristique sollicitudin nibh. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Pretium quam vulputate dignissim suspendisse. Posuere ac ut consequat semper viverra nam libero. Dictumst quisque sagittis purus sit amet. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Sed vulputate mi sit amet. Dolor sit amet consectetur adipiscing elit. Mollis aliquam ut porttitor leo a. Integer eget aliquet nibh praesent tristique magna sit amet purus. Ligula ullamcorper malesuada proin libero nunc consequat. Mauris cursus mattis molestie a iaculis. Suspendisse ultrices gravida dictum fusce. Augue mauris augue neque gravida in fermentum et.
                    <br/><br/>
                    Eu mi bibendum neque egestas. Eget dolor morbi non arcu risus quis. Eget nunc lobortis mattis aliquam faucibus. Mi quis hendrerit dolor magna eget est lorem. Placerat in egestas erat imperdiet sed euismod. Urna nec tincidunt praesent semper feugiat nibh sed. Erat velit scelerisque in dictum non consectetur. Elementum facilisis leo vel fringilla est ullamcorper eget. Est sit amet facilisis magna. Vulputate mi sit amet mauris.
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
            role: "Software Engineer",
            icon: "/assets/team-member-icons/ved-mohan.png"
        }, 
        {
            name: "Shashank Jha", 
            role: "UI/UX Designer",
            icon: "/assets/team-member-icons/shashank-jha.png"
        }, 
        {
            name: "Vyom Mohan", 
            role: "Research Assistant",
            icon: "/assets/team-member-icons/vyom-mohan.png"
        }, 
        {
            name: "Veer Mohan", 
            role: "Data Collection Specialist",
            icon: "/assets/team-member-icons/veer-mohan.png"
        }
    ]

    return (
        <Navigation current="About us">

            {aboutSite.map(card => (
                <Card className="m-5">
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

            <div className="flex mt-40 flex-col">

                <span className="text-5xl font-bold self-center">Our Team</span>

                <div className="flex flex-row justify-center mt-10 gap-10">
                    {aboutTeam.map(member => (
                        <a className={`flex flex-col text-center ${member.url ? "hover:underline" : ""}`} href={member.url}>
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