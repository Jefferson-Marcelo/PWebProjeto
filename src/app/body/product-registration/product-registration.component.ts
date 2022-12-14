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


  sellersPermitFile: any;
  //base64s
  sellersPermitString!: string;
  //json
  finalJson = {};

  currentId: number = 0;

  addPictures() {
    this.finalJson = {
      "sellersPermitFile": this.sellersPermitString,
    }
  }
  public picked(event: Event, field: number) {
    this.currentId = field;
    // @ts-ignore
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      if (field == 1) {
        this.sellersPermitFile = file;
        this.handleInputChange(file); //turn into base64
      }
    }
    else {
      alert("No file selected");
    }
  }

  handleInputChange(files: File) {
    let file = files;
    let pattern = /image- *  /;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: { target: any; }) {
    let reader = e.target;
    let base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    let id = this.currentId;
    switch (id) {
      case 1:
        this.sellersPermitString = base64result;
        break;
    }
    this.log();
  }

  log() {
    // for debug
    console.log('1', this.sellersPermitString);

  }

  //uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true })
*/

  productAtual: Product;

  inserindo = true;
  nomeBotao = 'Inserir';

  constructor(private rotaAtual: ActivatedRoute, private productFirestoreService: ProductFirestoreService,
              private roteador: Router, _formBuilder: FormBuilder) {
    this.productAtual = new Product('', '', '',0 , 0);
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = (rotaAtual.snapshot.paramMap.get('id'));
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const Encontrado = this.productFirestoreService.pesquisarPorId(idParaEdicao).subscribe(
          productEncontrado => this.productAtual = productEncontrado
        );
      }
    }

  }


  ngOnInit() {
  }
  inserirOuAtualizarProduct() {
    if (this.inserindo) {
      this.productFirestoreService.inserir(this.productAtual).subscribe(
        productInserido => {
          console.log('Produto cadastrado com sucesso!')
          this.roteador.navigate([''])
          }
      );

      this.productAtual = new Product('', '', '', 0,0);
    } else {
      this.productFirestoreService.atualizar(this.productAtual).subscribe(
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



