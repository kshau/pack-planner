import { getUserFromCookies } from "@/lib/db/getUserFromCookies";
import Pack from "@/lib/db/schemas/Pack";
import { NextResponse } from "next/server";

export async function POST(request) {

    try {

        const user = await getUserFromCookies(request.cookies);
        const {packId} = await request.json();

        const pack = await Pack.findOne({id: packId});

        if (pack.ownerId != user.sub) {
            throw new Error("Unauthorized");
        }

        await Pack.findOneAndDelete({id: packId});

        return NextResponse.json({}, { status: 200 });

    }

    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}