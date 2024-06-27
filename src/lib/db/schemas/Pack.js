import mongoose, { Schema } from "mongoose";

const packSchema = new mongoose.Schema({
    id: { type: String, required: true },
    ownerId: { type: String, required: true },
    name: { type: String, default: 'Untitled Pack', minLength: 1, maxLength: 32, required: true },
    categories: [{
        name: { type: String, default: "", maxLength: 20, required: true },
        color: { type: String, default: '#000000', required: true },
        items: [
            {
                name: { type: String, default: "", maxLength: 20, required: true },
                description: { type: String, default: "", maxLength: 32, required: true },
                weight: {
                    number: { type: Number, default: 0, max: 10000, required: true },
                    unit: { type: String, enum: ["oz", "lbs", "g", "kg"], default: "lbs", required: true }
                },
                price: { type: Number, default: 0.00, max: 10000, required: true },
                amount: { type: Number, default: 1, max: 10000, required: true }
            }
        ]
    }]
});

const Pack = mongoose.models.pack || mongoose.model('pack', packSchema);
export default Pack;