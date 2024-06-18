import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterModule,
    SvgIconComponent,
    CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  implements OnInit{

  public cartList: any = [];

  constructor(
    private dataService: DataService,
  )  {}

  ngOnInit(): void {
    this.getLocalStorageBasket();
  }


  getLocalStorageBasket() {
    this.cartList = this.dataService.getDataFromStorage('basketList', this.cartList);
  } 

  clearItem(item: any) {
    this.cartList.splice(item, 1);
    this.dataService.setDataTostorage('basketList', this.cartList);
  }


  clearAllList() {
    this.cartList = [];
  }
}
