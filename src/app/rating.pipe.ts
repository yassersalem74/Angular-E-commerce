import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {

  transform(rating: number): string {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 6 - fullStars - halfStar;

    let stars = '';
    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="fa-solid fa-star gold"></i>';
    }
    if (halfStar) {
      stars += '<i class="fa-solid fa-star-half-stroke gold></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="fa-regular fa-star gold></i>';
    }

    return stars;
  }
}
