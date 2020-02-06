import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //array of items in cart
  cartItems: IProduct[] = [];
  public $cartItems = new BehaviorSubject<IProduct[]>(this.cartItems);

  //total number of unique items in cart
  cartTotal = 0;
  $cartTotal = new BehaviorSubject<number>(this.cartTotal);

  //quantity of each item in cart
  cartQty = 0;
  $cartQty = new BehaviorSubject<number>(this.cartQty);

  //empty array of type IProduct
  productsInCart: IProduct[] = [];

  //store products
  products: IProduct[] = [
    {
      productID: '101',
      productName: 'Cosmic Crisp Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/cosmic2.jpg',
      productQty: 0
    },
    {
      productID: '102',
      productName: 'Imperial Fuji Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/fujiApple.jpg',
      productQty: 0
    },
    {
      productID: '103',
      productName: 'Golden Supreme Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/golden2.jpg',
      productQty: 0
    },
    {
      productID: '104',
      productName: 'Granny Smith Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/granny2.jpg',
      productQty: 0
    },
    {
      productID: '105',
      productName: 'Honeycrisp Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/honey2.jpg',
      productQty: 0
    },
    {
      productID: '106',
      productName: 'Jona Gold Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/jona2.jpg',
      productQty: 0
    },
    {
      productID: '107',
      productName: 'Newtown Pippin Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/newtown2.jpg',
      productQty: 0
    },
    {
      productID: '108',
      productName: 'Pink Lady Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/pink2.jpg',
      productQty: 0
    },
    {
      productID: '109',
      productName: 'Royal Gala Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/royal2.jpg',
      productQty: 0
    },
    {
      productID: '110',
      productName: 'Royal Red Apples',
      productPrice: 22,
      productImgURL: '../../assets/images/red2.jpg',
      productQty: 0
    }
  ];
  constructor() { }

  getApples(): IProduct[] {
    return this.products;
  }

  getApple(str: string): Observable<IProduct> {
    return of(this.products.find(x => x.productID === str));
  }

  addProductToCart(product: IProduct) {
    //check if product exists in cartItems
    let cartItem = this.cartItems.find(x => x.productID === product.productID);

    if (cartItem) {
      //if item already exists in cart, increment quantity of product
      cartItem.productQty++;
    } else {
      //if item doesn't exist in cart, increment to 1 and push product into cart
      product.productQty = 1;
      //push item into cartItems
      this.cartItems.push(product);
    }

    //console log
    console.log(this.cartItems);

    //behavior mathes reference
    this.$cartItems.next(this.cartItems);

    //update price ~ convert string to number
    //delete later, conversion not necessary
    this.cartTotal += +product.productPrice;

    //behavior match ref
    this.$cartTotal.next(this.cartTotal);

    //behavior match ref
    this.cartQty++;
    this.$cartQty.next(this.cartQty);
  }

  removeItemFromCart(cartItem: IProduct, index: number) {
    //splice cartItems
    this.cartItems.splice(index, 1);

    //update cartTotal using totalPrice to adjust changes
    const totalPrice = cartItem.productQty * +cartItem.productPrice;
    this.cartTotal -= totalPrice;

    //update quantity of products in cart
    this.cartQty -= cartItem.productQty;

    //apply changes to subject counterparts
    this.broadcastSubjects();
  }

  broadcastSubjects() {
    //update behavior ref
    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQty.next(this.cartQty);
  }
}
