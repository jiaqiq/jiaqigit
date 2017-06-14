import * as express from 'express';

const app = express();

export class Product {

    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string> 
    ) {

    }
}

const products: Product[] = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(2, "第二个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(3, "第三个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(4, "第四个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(5, "第五个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"]),
    new Product(6, "第六个商品", 1.99, 3.5, "这是第一个商品,这是商品描述", ["金融", "互联网"])
];

app.get('/', (req, res) => {
    res.send("Hello Express");
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    res.json(products.find((product) => product.id == req.params.id));
})

const server = app.listen(8000, "localhost", () => {
    console.log("服务器已启动, 地址是：http://localhost:8000");
}); 