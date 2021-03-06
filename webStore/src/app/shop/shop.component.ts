import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  //declare value to store productInfo
  productsInShop: IProduct[];

  //for ngFor = let product of productsInShop
  constructor(private dS: DataService) { }

  ngOnInit() {
    //set productsInShop to data in DataService
    this.productsInShop = this.dS.getApples();
  }

  //create function for click event add to cart btn
  addToCart(product: IProduct) {
    this.dS.addProductToCart(product);
  }

}
