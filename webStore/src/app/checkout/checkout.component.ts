import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  //shipping
  shipping: number = 0;

  //subtotal
  subtotal: number = 0;
  

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.$cartTotal.subscribe(total => {
      this.subtotal = total;
    });
  }

  selectStandard() {
    this.shipping = 5.99;
  }

  selectPriority() {
    this.shipping = 11.99;
  }

  placeOrder(){
    alert('Your order has been placed');
  }

}
