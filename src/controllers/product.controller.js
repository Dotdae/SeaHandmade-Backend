import Product from '../models/Product.model.js';

// Get all data.

export const getProducts = async (req, res) => {

    const products = await Product.find();

    return res.json(products);


}

// Single product.

export const getProduct = async (req, res) => {

    const { productId } = req.params;

    const product = await Product.findById(productId);

    if(product){

        res.status(200).json(product);

    }
    else{

        return res.status(500).json(
            {
                message: 'Product not found'
            }
        )

    }

}

// Post data.

export const createProduct = async (req, res) => {

    const { name, description, price, stock, available, imgURL } = req.body;

    // Insert section.

    try{

        const newProduct = new Product({
            name,
            description,
            price,
            stock,
            available,
            imgURL,
        })

        const productSaved = await newProduct.save();
        res.status(201).json(productSaved);

    }
    catch(error){

        return res.status(500).json(error);

    }


}

// Update data.

export const updateProduct = async (req, res) => {

    // Validate product exist..

    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.productId,
        req.body,
        {
            new: true,
        }
    )

    res.status(204).json(updatedProduct);

}

// Delete data.

export const deleteProduct = async (req, res) => {

    const { productId } = req.params;

    await Product.findOneAndDelete(productId);

    res.status(204).json();

}


// Validate if product exist.