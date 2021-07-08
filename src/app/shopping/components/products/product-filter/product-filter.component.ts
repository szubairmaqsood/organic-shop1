import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from './../../../../shared/models/category';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories:Category[]=[];
  constructor( private categoryService:CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => this.categories = categories)
  }

}
