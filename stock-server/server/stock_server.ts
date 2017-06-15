import * as express from "express";

const app = express();

app.get('/api/stock', (req, res) => {
    let result = stocks;
    let params = req.query;
    if (params.name) {
        result = result.filter(stock => stock.name.indexOf(params.name) !== -1);
    }

    res.json(result);
});

app.get('/api/stock/:id', (req, res) => {

    res.json(stocks.find(stock => stock.id == req.params.id));
});

const server = app.listen(8000, 'localhost', () => {
    console.log('服务器已启动，地址是：http://localhost:8000');
});

export class Stock {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>
    ) {

    }
}

const stocks: Stock[] = [
    new Stock(1, "第一只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(2, "第二只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(3, "第三只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(4, "第四只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(5, "第五只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(6, "第六只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(7, "第七只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Stock(8, "第八只股票", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"])
];


