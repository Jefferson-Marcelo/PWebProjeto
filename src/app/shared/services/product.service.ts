import { Injectable } from '@angular/core';
import {PRODUCTS} from "../model/PRODUCTS";
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //products: Array<Product>;

  URL_PRODUCTS = 'http://localhost:4200/cadastrarproduto'

  constructor(private httpClient: HttpClient) {
  }

  listar():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.URL_PRODUCTS);
  }

  inserirProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.URL_PRODUCTS, product);
  }

  excluirProduct(id: number): Observable<object>{
    return this.httpClient.delete(`${this.URL_PRODUCTS}/${id}`)
  }
}
