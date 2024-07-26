import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offer',
  standalone: true
})
export class OfferPipe implements PipeTransform {

  transform(price: number, discountPercentage: number): string {
    if (discountPercentage && discountPercentage > 0) {
      const discountAmount = (price * discountPercentage) / 100;
      const discountedPrice = price - discountAmount;
      return `${discountedPrice.toFixed(2)}`;
    }
    return price.toFixed(2);
  }

}
