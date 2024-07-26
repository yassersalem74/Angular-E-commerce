import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RatingPipe } from '../rating.pipe';
import { OfferPipe } from '../offer.pipe';


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

  constructor(private router: Router) {}


  handleRedirect(id: string) {
    this.router.navigate(['/product-details', id]);
  }
}
