import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { DetailsComponent } from './components/shop/details/details.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductsComponent } from './components/shop/products/products.component';
import { ShopComponent } from './components/shop/shop.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { RaglanComponent } from './raglan/raglan.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { EstampadosComponent } from './estampados/estampados.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
    { path: 'hoodies', component: HoodiesComponent},
  { path: 'raglan', component: RaglanComponent},
  { path: 'camisetas', component: CamisetasComponent},
  { path: 'estampados', component: EstampadosComponent},
  { path: 'shop', component: ShopComponent,
  children: [
    { path: '', component: ProductsComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'details/:category/:id', component: DetailsComponent },
  ]
},

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0]
})],
  //imports: [RouterModule.forChild(routes as Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
