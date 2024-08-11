import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { ShopComponent } from './components/shop/shop.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProductsComponent } from './components/shop/products/products.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { DetailsComponent } from './components/shop/details/details.component';
import { ProductsContainerComponent } from './components/shop/products-container/products-container.component';
import { ProductsCardComponent } from './components/shop/products-container/products-card/products-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CheckoutCardComponent } from './components/shop/checkout/checkout-card/checkout-card.component';
import { CarouselModule } from './carousel/carousel.module';
import { Carousel2Module } from './carousel2/carousel2.module';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { RaglanComponent } from './raglan/raglan.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { EstampadosComponent } from './estampados/estampados.component';
import { HeadSlideComponent } from './components/shared/head-slide/head-slide.component';
import { ShopService } from './services/products.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartButtonComponent } from './components/shared/cart-button/cart-button.component';
import { MobileMenuComponent } from './components/shared/mobile-menu/mobile-menu.component';
import { GoTopComponent } from './components/shared/go-top/go-top.component';
import { WhatsappButtonComponent } from './components/shared/whatsapp-button/whatsapp-button.component';
// import  localeEsMX from '@angular/common/locales/es-MX'
// import { registerLocaleData } from '@angular/common';
// registerLocaleData(localeEsMX);

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ShopComponent,
    NavbarComponent,
    ProductsComponent, 
    FooterComponent,
    CheckoutComponent,
    CheckoutCardComponent,
    HoodiesComponent,
    RaglanComponent,
    CamisetasComponent,
    EstampadosComponent,
    HeadSlideComponent,
    ProductsCardComponent,
    DetailsComponent,
    ProductsContainerComponent,
    CartButtonComponent,
    MobileMenuComponent,
    GoTopComponent,
    WhatsappButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    CarouselModule,
    Carousel2Module,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
