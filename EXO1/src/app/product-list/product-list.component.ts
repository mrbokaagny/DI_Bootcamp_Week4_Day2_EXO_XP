import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  products = [
    {
      name : 'Pomme',
      price : 1250
    } ,
    {
      name : 'Orange',
      price : 526
    } ,
    {
      name : 'Avocat',
      price : 265
    }
  ]

  ngOnInit(): void {
  }

}
