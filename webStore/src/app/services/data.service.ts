import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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
}
