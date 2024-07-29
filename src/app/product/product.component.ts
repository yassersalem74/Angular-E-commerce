import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RatingPipe } from '../rating.pipe';
import { OfferPipe } from '../offer.pipe';
import { CounterService } from '../services/counter.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink , RatingPipe , OfferPipe],
  // imports: [RouterLink , CalcOfferPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productItem: any;
  @Output() handleSendData = new EventEmitter<string>();

  constructor(private router: Router , private counterService: CounterService , private cartService: CartService) {}

  counter = 0;

  ngOnInit() {
    this.counterService.getCounter().subscribe((res) => (this.counter = res));
  }

  increaseCounter(){
    this.counterService.setCounter(this.counter + 1)
  }

  addToCart() {
    this.cartService.addToCart(this.productItem);
  }

  handleRedirect(id: string) {
    this.router.navigate(['/product-details', id]);
  }
}
