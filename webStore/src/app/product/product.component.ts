import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //store apple info in product
  product: IProduct;

  //add data service to constructor + route
  constructor(private ds: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {

    //grab id for path
    const id = this.route.snapshot.paramMap.get('id');

    //grab name for path
    const nameOfProduct = this.route.snapshot.paramMap.get('nameOfProduct');

    //pass id thru data service function
    this.ds.getApple(id).subscribe(item => this.product = item);

  }

}
