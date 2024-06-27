import Store from "@/lib/db/schemas/Store";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {

        const stores = await Store.find({});

        return NextResponse.json({stores}, { status: 200 });

    }

    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}