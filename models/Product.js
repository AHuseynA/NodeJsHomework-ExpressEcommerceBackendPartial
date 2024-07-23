const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: [50, "Title longer than 50 Characters"],
        },

        brand: {
            type: String,
            required: true,
            maxlength: [30, "Brand longer than 30 characters"],
        },

        description: {
            type: String,
            maxlength: [300, "Description longer than 300 characters"],
        },

        price: {
            type: Number,
            required: true,
        },

        gallery: {
            type: [String],
            required: true,
        },

        category: {
            type: String,
            required: true,
            enum: ["Clothing", "Electronics", "Books"],
        },

        colors: {
            type: [String],
            required: true,
        },

        inventory: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = new mongoose.model("Product", ProductSchema);