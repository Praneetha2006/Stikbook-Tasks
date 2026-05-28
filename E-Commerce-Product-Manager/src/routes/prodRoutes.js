const express = require("express");

const {
    getProducts,
    getProductsByCategory,
    getProductsByPrice,
    searchProducts,
    sortProducts,
    getDiscountedProducts,
    getCombinedFilters
} = require("../controller/prodController");

const router = express.Router();

router.get("/", getProducts);

router.get("/category/:category", getProductsByCategory);

router.get("/price", getProductsByPrice);

router.get("/search/:name", searchProducts);

router.get("/sort/:sortBy", sortProducts);


router.get("/discount/:percent", getDiscountedProducts);

router.get("/combine", getCombinedFilters);

module.exports = router;