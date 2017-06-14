"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(2, "第二个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(3, "第三个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(4, "第四个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(5, "第五个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(6, "第六个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"])
];
app.get('/', function (req, res) {
    res.send("Hello Express");
});
app.get('/products', function (req, res) {
    res.json(products);
});
app.get('/products/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已启动, 地址是：http://localhost:8000");
});
