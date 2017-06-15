"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/api/stock', function (req, res) {
    var result = stocks;
    var params = req.query;
    if (params.name) {
        result = result.filter(function (stock) { return stock.name.indexOf(params.name) !== -1; });
    }
    res.json(result);
});
app.get('/api/stock/:id', function (req, res) {
    res.json(stocks.find(function (stock) { return stock.id == req.params.id; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log('服务器已启动，地址是：http://localhost:8000');
});
var Stock = (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, "第一只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(2, "第二只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(3, "第三只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(4, "第四只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(5, "第五只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(6, "第六只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(7, "第七只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(8, "第八只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"])
];
