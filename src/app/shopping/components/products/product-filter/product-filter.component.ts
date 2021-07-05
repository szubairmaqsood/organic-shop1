import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories:String[]=['Bread','Dairy','Fruits','Seasoning and Spices','Vegetables'];
  constructor() { }

  ngOnInit(): void {
  }

}
