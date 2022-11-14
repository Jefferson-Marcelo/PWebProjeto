import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/model/product";
//import {ProductService} from "../../shared/service/product.Service";
import {PRODUCTS} from "../../shared/model/PRODUCTS";
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {

  product: Product;
  products: Array<Product>

  constructor() {
    this.product = new Product();
    this.products = PRODUCTS;
  }

  /*inserirProduct(): void{
    this.productService.inserir(this.product);
    this.product = new Product();
  }*/

  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });

  ngOnInit(): void {
  }

  inserirProduct() {

  }
}
