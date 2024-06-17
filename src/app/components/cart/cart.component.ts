import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterModule,
    SvgIconComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  public cartList: any = [

  ]


  clearAllList() {
    this.cartList = [];
  }
}
