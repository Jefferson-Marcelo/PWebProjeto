import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from "../../shared/model/PRODUCTS";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
