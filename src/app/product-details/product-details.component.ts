import { Component , Input} from '@angular/core';
import { Type } from '../type';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RatingPipe } from '../rating.pipe';
import { TotalPipe } from '../total.pipe';
import { ProductsRequestService } from '../services/products-request.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RatingPipe , TotalPipe],
templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  productDetails: any;
  quantity: number = 1;
  total: number = 0;

  @Input() id: string = '';

    constructor(private activatedRoute: ActivatedRoute , private productsRequestService: ProductsRequestService) {}

    ngOnInit() {
      this.productsRequestService.getProductDetails(this.id).subscribe((res) => {
        this.productDetails = res;
        this.calculateTotal(); // Call calculateTotal after productDetails is assigned
      });
    }

    increaseQuantity() {
      this.quantity++;
      this.calculateTotal();
    }

    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
        this.calculateTotal();
      }
    }

    calculateTotal() {
      this.total = this.productDetails.price * this.quantity;
    }
  }
