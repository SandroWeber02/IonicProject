import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Comprar () {
    this.router.navigate(['carrinho']);
   }

}
