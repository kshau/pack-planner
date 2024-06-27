import { getUserFromCookies } from "@/lib/db/getUserFromCookies";
import Pack from "@/lib/db/schemas/Pack";
import { NextResponse } from "next/server";

function generatePackId() {

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let id = "";

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters[randomIndex];
    }

    return id;
}

export async function POST(request) {

    try {

        const user = await getUserFromCookies(request.cookies);

        const packId = generatePackId();

        const pack = new Pack({
            "id": packId,
            "ownerId": user.sub,
            "name": "My Camping List",
            "categories": [
              {
                "name": "Essentials", 
                "color": "#de5d54",
                "items": [
                  {
                    "name": "Backpack", 
                    "description": "A simple bag for carrying a tent and other stuff.", 
                    "weight": {
                      "number": 30, 
                      "unit": "lbs"
                    }, 
                    "amount": 1
                  }
                ]
              }
            ]
        })

        await pack.save();

        return NextResponse.json({ packId }, { status: 200 });

    }

    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}