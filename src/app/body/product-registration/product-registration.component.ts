import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/model/product";
import { FileUploader } from 'ng2-file-upload';

import {FormBuilder } from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {
/*
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
*/

  productAtual: Product;

  inserindo = true;
  nomeBotao = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private productService: ProductService,
              private roteador: Router, _formBuilder: FormBuilder) {
    this.productAtual = new Product('', '', '',0 , 0);
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = Number(rotaAtual.snapshot.paramMap.get('id'));
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const Encontrado = this.productService.pesquisarPorId(idParaEdicao).subscribe(
          productEncontrado => this.productAtual = productEncontrado
        );
      }
    }

  }
  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });

  ngOnInit() {
  }

  inserirOuAtualizarProduct() {
    if (this.inserindo) {
      this.productService.inserirProduct(this.productAtual).subscribe(
        productInserido => {
          console.log('Produto cadastrado com sucesso!')
          this.roteador.navigate([''])}
      );
      this.productAtual = new Product('', '', '', 0,0);
    } else {
      this.productService.atualizar(this.productAtual).subscribe(
        productAtualizado => {
          console.log('Produto atualizado com sucesso!');
          this.roteador.navigate([''])}
      );
    }
  }

  atualizaNome(novoNome: string) {
    this.productAtual.nome = novoNome;
  }
  }



