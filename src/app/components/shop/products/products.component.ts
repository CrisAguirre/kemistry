import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';
import { Product } from '../../../interfaces/products.interface';
import { ShopService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  total$ = this.checkoutService.totalAction$;

  products: Product[] = [];

  constructor(
    private productsService: ShopService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  filterProducts(category: string): void {
    this.productsService.filterProducts(category);
  }

}
