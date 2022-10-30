import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { DashboardsModule } from './dashboards/dashboards.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    OrdersModule,
    DashboardsModule
  ]
})
export class ComponentsModule { }
