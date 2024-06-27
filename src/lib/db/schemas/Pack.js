import mongoose, { Schema } from "mongoose";

const packSchema = new mongoose.Schema({
    id: { type: String, required: true },
    ownerId: { type: String, required: true },
    name: { type: String, default: 'Untitled Pack', minLength: 1, maxLength: 32, required: true },
    categories: [{
        name: { type: String, default: "", maxLength: 32 },
        color: { type: String, default: '#000000', required: true },
        items: [
            {
                name: { type: String, default: "", maxLength: 32 },
                description: { type: String, default: "", maxLength: 64 },
                weight: {
                    number: { type: Number, default: 0, max: 10000 },
                    unit: { type: String, enum: ["oz", "lbs", "g", "kg"], default: "lbs" }
                },
                price: { type: Number, default: 0, max: 10000 },
                amount: { type: Number, default: 1, max: 10000 }, 
                url: {type: String, default: ""}
            }
        ]
    }]
});

const Pack = mongoose.models.pack || mongoose.model('pack', packSchema);
export default Pack;