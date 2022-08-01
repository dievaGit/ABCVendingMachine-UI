import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DetailPageComponent } from './views/detail-page/detail-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { OrderComponent } from './views/order/order.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order', component: OrderComponent },
  { path: ':type/:id', component: DetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
