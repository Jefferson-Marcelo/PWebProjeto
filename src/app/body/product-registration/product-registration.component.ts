import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/model/product";
import { FileUploader } from 'ng2-file-upload';
import {FloatLabelType} from "@angular/material/form-field";
import {FormBuilder, FormControl } from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {

  product: Product;
  products: Array<Product>

  constructor(private productService: ProductService, _formBuilder: FormBuilder  ) {
    this.product = new Product();
    this.products = productService.listar();

  }

  inserirProduct(): void{
    this.productService.inserirProduct(this.product)
    this.product = new Product();
  }

  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });



  ngOnInit(): void {
  }


}
