import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './shopping/components/products/product-filter/product-filter.component';
import { LoginComponent } from './core/components/login/login.component';


const routes: Routes = [
  { path: '', component: ProductFilterComponent },
  { path: 'login', component: LoginComponent },
];


@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
