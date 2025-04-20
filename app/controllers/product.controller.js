const ProductModel = require('../models/product.model')

const getProducts = async (req,res) =>{
    try {
        const products = await ProductModel.find({})
        res.status(200).json(products)
       
   } catch (error) {
       res.status(500).json({message : error.message})
   }
}

const getProduct = async (req,res) => {
    try {
        const { id } = req.params
         const products = await ProductModel.findById(id)
         res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const updateProduct = async (req,res) => {
    try {
        const {id } = req.params
        const product = await ProductModel.findByIdAndUpdate(id,req.body)
        if (!product){
            return res.status(404).json({message : "Product not found"})
        }
        const updatedProduct = await ProductModel.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message : error.message})
        
    }
}

const addProduct = async (req,res) => {
    try {
        const product = await ProductModel.create(req.body);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteProduct = async (req,res) =>{
    try {
            const { id } = req.params
            const product = await ProductModel.findByIdAndDelete(id);
            if (!product){
                res.status(404).json({message:"Product not found!"});
            }
            res.status(200).json({message:"Product successfully deleted."})
            
        } catch (error) {
            res.status(500).json({message: error.message})
            
        }
}

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct

};