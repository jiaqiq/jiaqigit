import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService{

  getProduct(): Product {
    return new Product(1, "小米6", 2999, "最新小米手机");
  }

  constructor(private logger:LoggerService ) { }

}
