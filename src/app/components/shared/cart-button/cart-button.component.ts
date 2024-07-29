import { Component } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent {
  quantity$ = this.checkoutService.quantityAction$;
  constructor(private checkoutService: CheckoutService) { }
}