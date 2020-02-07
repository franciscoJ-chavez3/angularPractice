import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //for navbar
  public isMenuCollapsed = true;
  //for cart
  cartCount = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.$cartQty.subscribe(count => {
      this.cartCount = count;
    });
  }

}
