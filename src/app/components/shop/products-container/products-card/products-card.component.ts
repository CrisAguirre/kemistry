import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../../interfaces/products.interface';
import { Tallas } from 'src/app/constants/sizes';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css'],
  // Este change actualiza la data, en este caso es el onpush a que
  // lo usamos para agregar los productos
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsCardComponent implements OnInit {
  @Input() product!: Product;
  tallas = Tallas;
  @Output() addToCartClick = new EventEmitter<Product>();

  constructor(private notificationService: NotificationService) {}

  onClick(): void {
    // Llamo al evento y emito enviandole el producto
    this.addToCartClick.emit(this.product);
    this.notificationService.showNotification(`${this.product.name} añadido al carrito`);
  }

ngOnInit(): void { }
}

