import { getUserFromCookies } from "@/lib/db/getUserFromCookies";
import Pack from "@/lib/db/schemas/Pack";
import { NextResponse } from "next/server";

export async function POST(request) {

    try {

        const user = await getUserFromCookies(request.cookies);
        const {pack} = await request.json();

        const existingPack = await Pack.findOne({id: pack.id});


        if (existingPack.ownerId != user.sub) {
            throw new Error("Unauthorized");
        }

        await Pack.findOneAndReplace({id: pack.id}, {
            ...pack, 
            ownerId: existingPack.ownerId
        }, {runValidators: true});

        return NextResponse.json({}, { status: 200 });
    }

    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}