import mongoose, { Schema } from "mongoose";

const storeSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    value: {type: String, required: true}, 
    productCategories: [
        {
            name: {type: String, required: true}, 
            products: [
                {
                    name: {type: String, required: true}, 
                    price: {type: Number, required: true}, 
                    weight: {
                        number: {type: Number, required: true, max: 1000000}, 
                        unit: {type: String, enum: ["oz", "lbs", "g", "kg"], default: "lbs", required: true}
                    }, 
                    image: {type: String, required: true, maxLength: 64}, 
                    url: {type: String, required: true, maxLength: 64}
                }
            ]
        }
    ]
});

const Store = mongoose.models.store || mongoose.model('store', storeSchema);
export default Store;