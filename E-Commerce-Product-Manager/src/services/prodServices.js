const products = require("../data/products");

const getAllProducts = () => {
    return products;
};

const filterByCategory = (category) => {
    return products.filter(
        product =>
            product.category.toLowerCase() === category.toLowerCase()
    );
};

const filterByPriceRange = (min, max) => {
    return products.filter(
        product =>
            product.price >= min &&
            product.price <= max
    );
};

const searchByName = (query) => {
    return products.filter(product =>
        product.name
            .toLowerCase()
            .includes(query.toLowerCase())
    );
};

const sortProducts = (sortBy) => {
    const copiedProducts = [...products];

    if (sortBy === "price") {
        return copiedProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "rating") {
        return copiedProducts.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "name") {
        return copiedProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    return copiedProducts;
};


const applyDiscount = (discountPercent) => {
    return products.map(product => ({
        ...product,
        discountedPrice:
            product.price -
            (product.price * discountPercent) / 100
    }));
};

const combineFilters = (category, min, max) => {
    return products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase() &&
        product.price >= min &&
        product.price <= max
    );
};

module.exports = {
    getAllProducts,
    filterByCategory,
    filterByPriceRange,
    searchByName,
    sortProducts,
    applyDiscount,
    combineFilters
};