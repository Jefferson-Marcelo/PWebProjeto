import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from "../../shared/model/PRODUCTS";
import {Product} from "../../shared/model/product";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Array<Product> | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.listar().subscribe(
      products => this.products = products
    );
  }

}
