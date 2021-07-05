import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ShippingCartSummaryComponent } from './components/shipping-cart-summary/shipping-cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    OrderSuccessComponent,
    ProductFilterComponent,
    ShippingCartSummaryComponent,
    ShippingFormComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingModule { }
