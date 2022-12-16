import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/model/product";
import { FileUploader } from 'ng2-file-upload';

import {FormBuilder } from "@angular/forms";
import {ProductService} from "../../shared/services/product.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductFirestoreService} from "../../shared/services/product-firestore.service";

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss']
})
export class ProductRegistrationComponent implements OnInit {

  productAtual: Product;

  inserindo = true;
  nomeBotao = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private productService: ProductService,
              private roteador: Router, _formBuilder: FormBuilder) {
    this.productAtual = new Product('', '', '', 0, 0);
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = (rotaAtual.snapshot.paramMap.get('id'));
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const Encontrado = this.productService.pesquisarPorId(Number(idParaEdicao)).subscribe(
          productEncontrado => this.productAtual = productEncontrado
        );
      }
    }

  }


  ngOnInit() {
  }

  inserirOuAtualizarProduct() {
    if (this.inserindo) {
      this.productService.inserirProduct(this.productAtual).subscribe(
        productInserido => {
          console.log('Produto cadastrado com sucesso!')
          this.roteador.navigate([''])
        }
      );

      this.productAtual = new Product('', '', '', 0, 0);
    } else {
      this.productService.atualizar(this.productAtual).subscribe(
        productAtualizado => {
          console.log('Produto atualizado com sucesso!');
          this.roteador.navigate([''])
        }
      );
    }
  }

  onFileSelected($event: Event) {

  }
}


