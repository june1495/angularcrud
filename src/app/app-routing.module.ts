import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ListProductComponent,
  // },
  { path: 'product', component: ListProductComponent },
  {
    path: 'createproduct',
    component: CreateProductComponent,
  },
  {
    path: 'editproduct/:id',
    component: CreateProductComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
