import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //empty array of type IProduct
  productsInCart: IProduct[] = [];

  //store products
  products: IProduct[] = [
    {
      productID: '101',
      productName: 'Cosmic Crisp Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/cosmicCrispApple.jpg'
    },
    {
      productID: '102',
      productName: 'Imperial Fuji Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/fujiApple.jpg'
    },
    {
      productID: '103',
      productName: 'Golden Supreme Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/goldenSupremeApple.jpg'
    },
    {
      productID: '104',
      productName: 'Granny Smith Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/grannySmithApples.jpg'
    },
    {
      productID: '105',
      productName: 'Honeycrisp Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/honeycrispApple.jpg'
    },
    {
      productID: '106',
      productName: 'Jona Gold Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/jonaGoldApple.jpg'
    },
    {
      productID: '107',
      productName: 'Newtown Pippin Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/newTownPippinApple.jpg'
    },
    {
      productID: '108',
      productName: 'Pink Lady Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/pinkLadyApple.jpg'
    },
    {
      productID: '109',
      productName: 'Royal Gala Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/royalGalaApple.jpg'
    },
    {
      productID: '110',
      productName: 'Royal Red Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/royalRedApple.jpg'
    }
  ];
  constructor() { }

  getApples(): IProduct[] {
    return this.products;
  }

  getApple(str: string): Observable<IProduct> {
    return of(this.products.find(x => x.productID === str));
  }

  //for add to cart btn
  addProductsToCart(apple: IProduct) {
    //push apple into cart
    this.productsInCart.push(apple);
    //console log
    console.log(this.productsInCart);
  }

  //for cart component
  getProductsInCart(): IProduct[] {
    //return cart
    return this.productsInCart;
  }

  //for emptying cart in cart component
  emptyCart() {
    //set length of array to zero
    this.productsInCart.length = 0;
  }

  //for removeBtn in cart
  removeProductInCart(apple: IProduct) {
    //find index
    const index = this.findIndexOfProduct(apple);

    //splice array: productsInCart
    this.productsInCart.splice(index, 1);

  }

  //for removeBtn in cart
  findIndexOfProduct(apple: IProduct): number {
    //use indexOf to find index of apple
    return this.productsInCart.indexOf(apple);
  }
}
