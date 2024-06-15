const mongoose=require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name:
        {
            type:String,
            required: [true, "Please enter Product Name"]
        },
        quantity:
        {
            type:Number,
            required: true,
            default: 0
        },
        price:
        {
            type:Number,
            required: true,
            default: 0
        },
        Image:
        {
            type:String,
            required: false
        }
    },
);

//In database it will be named as 'products'
const Product= mongoose.model('Product',ProductSchema);

module.exports=Product;