import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';



@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
