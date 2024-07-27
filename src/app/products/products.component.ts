import { Component } from '@angular/core';
import { Type } from '../type';
import { ProductComponent } from "../product/product.component";
import { ProductsRequestService } from '../services/products-request.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products :any;


  constructor(private productsRequestService: ProductsRequestService ) {}


  ngOnInit() {
    this.productsRequestService.getProductsList().subscribe((res) =>{
      this.handleData(res) });
    }

  handleData(data:any){
    this.products= data.products
  }


handleReceiveData(id: string) {
  console.log('FROM PARENT', id);
  this.products = this.products.filter((product : any) => product.id !== id);
}

}
