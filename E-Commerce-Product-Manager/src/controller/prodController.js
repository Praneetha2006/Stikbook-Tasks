const productService = require("../services/prodServices");

const getProducts = (req, res) => {
    res.json(productService.getAllProducts());
};

const getProductsByCategory = (req, res) => {
    const { category } = req.params;

    res.json(
        productService.filterByCategory(category)
    );
};

const getProductsByPrice = (req, res) => {
    const min = Number(req.query.min);
    const max = Number(req.query.max);

    res.json(
        productService.filterByPriceRange(min, max)
    );
};

const searchProducts = (req, res) => {
    const { name } = req.params;

    res.json(
        productService.searchByName(name)
    );
};

const sortProducts = (req, res) => {
    const { sortBy } = req.params;

    res.json(
        productService.sortProducts(sortBy)
    );
};


const getDiscountedProducts = (req, res) => {
    const percent = Number(req.params.percent);

    res.json(
        productService.applyDiscount(percent)
    );
};

const getCombinedFilters = (req, res) => {
    const { category, min, max } = req.query;

    res.json(
        productService.combineFilters(
            category,
            Number(min),
            Number(max)
        )
    );
};

module.exports = {
    getProducts,
    getProductsByCategory,
    getProductsByPrice,
    searchProducts,
    sortProducts,
    getDiscountedProducts,
    getCombinedFilters
};