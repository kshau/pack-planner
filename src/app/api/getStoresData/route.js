import { NextResponse } from "next/server";

const stores = [
    {
        "name": "REI", 
        "value": "rei",
        "items": [
            {
                "name": "Traverse 60 Pack - Women's",
                "description": "Refugio 26L Pack",
                "weight": {
                  "number": 1.62,
                  "unit": "lbs"
                },
                "price": 109.00, 
                "url": "https://www.rei.com/product/185561/rei-co-op-traverse-60-pack-womens",
                "image": "https://www.rei.com/media/af6fe7f7-e641-4371-ad8f-6704798a3b11.jpg", 
            }, 
            {
                "name": "Traverse 60 Pack - Women's",
                "description": "Refugio 26L Pack",
                "weight": {
                  "number": 1.62,
                  "unit": "lbs"
                },
                "price": 109.00, 
                "url": "https://www.rei.com/product/185561/rei-co-op-traverse-60-pack-womens",
                "image": "https://www.rei.com/media/af6fe7f7-e641-4371-ad8f-6704798a3b11.jpg"
            }, 
            {
                "name": "Traverse 60 Pack - Women's",
                "description": "Refugio 26L Pack",
                "weight": {
                  "number": 1.62,
                  "unit": "lbs"
                },
                "price": 109.00, 
                "url": "https://www.rei.com/product/185561/rei-co-op-traverse-60-pack-womens",
                "image": "https://www.rei.com/media/af6fe7f7-e641-4371-ad8f-6704798a3b11.jpg"
            }, 
            {
                "name": "Traverse 60 Pack - Women's",
                "description": "Refugio 26L Pack",
                "weight": {
                  "number": 1.62,
                  "unit": "lbs"
                },
                "price": 109.00, 
                "url": "https://www.rei.com/product/185561/rei-co-op-traverse-60-pack-womens",
                "image": "https://www.rei.com/media/af6fe7f7-e641-4371-ad8f-6704798a3b11.jpg"
            }, 
            {
                "name": "Traverse 60 Pack - Women's",
                "description": "Refugio 26L Pack",
                "weight": {
                  "number": 1.62,
                  "unit": "lbs"
                },
                "price": 109.00, 
                "url": "https://www.rei.com/product/185561/rei-co-op-traverse-60-pack-womens",
                "image": "https://www.rei.com/media/af6fe7f7-e641-4371-ad8f-6704798a3b11.jpg"
            }, 
            {
                "name": "Traverse 60 Pack - Women's",
                "description": "Refugio 26L Pack",
                "weight": {
                  "number": 1.62,
                  "unit": "lbs"
                },
                "price": 109.00, 
                "url": "https://www.rei.com/product/185561/rei-co-op-traverse-60-pack-womens",
                "image": "https://www.rei.com/media/af6fe7f7-e641-4371-ad8f-6704798a3b11.jpg"
            }, 
        ]
    }, 
    {
        "name": "The North Face", 
        "value": "northface",
        "items": [

        ]
    }, 
    {
        "name": "Dick's", 
        "value": "dicks",
        "items": [

        ]
    }
]

export async function GET(request) {

    try {
        return NextResponse.json({stores}, { status: 200 });
    }

    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}