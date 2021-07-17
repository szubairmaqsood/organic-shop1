import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './shopping/components/products/product-filter/product-filter.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';



const routes: Routes = [
  { path: '', component: ProductFilterComponent },
  { path: 'login', component: LoginComponent },
  {path:'SignUp',component:SignUpComponent}
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
