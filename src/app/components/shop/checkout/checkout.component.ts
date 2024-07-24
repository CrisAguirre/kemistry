import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../../services/checkout.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {

  public sendContainer = false;

  public sendEmail(e: Event): void {
    this.sendContainer = true;
    e.preventDefault();
    emailjs.sendForm('service_kemistry', 'template_4igbt1w', e.target as HTMLFormElement, 'cGrzb1XtTx9Kzyc7X')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  // traigo variable de service
  quantity$ = this.checkoutService.quantityAction$;
  total$ = this.checkoutService.totalAction$;
  cart$ = this.checkoutService.cartAction$;
  
  discount!: number;
  // traigo el service
  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    // scroll hacia el top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.discount = this.checkoutService.getDiscount();

  }
  // emptyCart(products: products):void {
  //   this.checkoutService.resetCart();
  //   this.checkoutService.updateCart(products);
  // }
}
