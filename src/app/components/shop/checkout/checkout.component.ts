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

    // Inicializar las variables
    let quantity = 0;
    let total = 0;
    let cart: any[] = [];

    // Obtener los valores actuales de los observables
    this.checkoutService.quantityAction$.subscribe(q => quantity = q);
    this.checkoutService.totalAction$.subscribe(t => total = t);
    this.checkoutService.cartAction$.subscribe(c => cart = c);

    // Crear un objeto con la información adicional
    const additionalInfo = {
      quantity: quantity,
      total: total,
      cart: JSON.stringify(cart),
      discount: this.discount
    };

    // Agregar la información adicional al formulario
    const form = e.target as HTMLFormElement;
    Object.keys(additionalInfo).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = additionalInfo[key as keyof typeof additionalInfo].toString();
      form.appendChild(input);
    });

    emailjs.sendForm('service_kemistry', 'template_4igbt1w', form, 'cGrzb1XtTx9Kzyc7X')
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
