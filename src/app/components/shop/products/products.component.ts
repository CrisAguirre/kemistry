import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';
import { Product } from '../../../interfaces/products.interface';
import { ShopService } from '../../../services/products.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  total$ = this.checkoutService.totalAction$;

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
    AOS.init();
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(true); }
        }
      }
    });
  }

  products: Product[] = [];

  constructor(
    private productsService: ShopService,
    private checkoutService: CheckoutService,
    private route: ActivatedRoute, private router: Router
  ) {}

  filterProducts(category: string): void {
    this.productsService.filterProducts(category);
  }

}
