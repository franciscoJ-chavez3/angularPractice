import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //variables
  cartItems: IProduct[] = [];
  cartTotal = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.$cartItems.subscribe(items => {
      this.cartItems = items;
    });

    this.dataService.$cartTotal.subscribe(total => {
      this.cartTotal = total;
    });
  }

  removeFromCart(cartItem: IProduct, index: number) {
    this.dataService.removeItemFromCart(cartItem, index);
  }
}
