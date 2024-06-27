import Pack from "@/lib/db/schemas/Pack";
import { NextResponse } from "next/server";

export async function POST(request) {

    try {

        const {packId} = await request.json();
    
        const pack = await Pack.findOne({id: packId});
    
        return NextResponse.json({pack}, { status: 200 });

    }

    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}