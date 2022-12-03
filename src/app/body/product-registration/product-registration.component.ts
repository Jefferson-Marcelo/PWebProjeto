import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/model/product";
import { FileUploader } from 'ng2-file-upload';
import {FloatLabelType} from "@angular/material/form-field";
import {FormBuilder, FormControl } from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {

  product: Product;
  products!: Array<Product>;

  constructor(private productService: ProductService, _formBuilder: FormBuilder  ) {
    this.product = new Product();
  }

  inserirProduct(): void{
    this.productService.inserirProduct(this.product)
    this.product = new Product();
  }

  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });



  ngOnInit(): void {
    this.productService.listar().subscribe(
      products => this.products = products
    );
  }

  removerProduct(product: Product):void{
    this.productService.excluirProduct(product.id).subscribe(
    resposta => {
      const indxProductARemover = this.products.findIndex( p => p.nome === product.nome);
      if (indxProductARemover > -1){
        this.products.splice(indxProductARemover,1)
      }
    }
    )

  }
  }



