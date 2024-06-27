import { getUserFromCookies } from "@/lib/db/getUserFromCookies";
import Pack from "@/lib/db/schemas/Pack";
import { NextResponse } from "next/server";

export async function POST(request) {

    try {

        const user = await getUserFromCookies(request.cookies);

        const packs = await Pack.find({ownerId: user.sub});
    
        return NextResponse.json({packs}, { status: 200 });

    }

    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}