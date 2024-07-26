import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path:'',
    component: ProductsComponent,
    title : 'Products'
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    title: 'Game details',
  },
  {
    path:'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path:'sign-up',
    component: SignUpComponent,
    title: 'Sign Up'
  },
  {
    path : 'cart',
    component:  CartComponent,
    title: 'Cart'
  }
  // {
  //   path:'login',
  //   component: LoginComponent,
  //   title : 'Login'
  // },
  // {
  //   path:'signup',
  //   component: SignUpComponent,
  //   title : 'Sign-up'
  // },


];
