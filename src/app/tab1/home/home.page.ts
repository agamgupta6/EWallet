import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  features = [{
    text: 'My Wallet'
  }, {
    text: 'Make Payment'
  }, {
    text: 'Add Money'
  }, {
    text: 'Transfer'
  }, {
    text: 'Transactions'
  },];
  constructor() {
  }

  ngOnInit() {
    this.color = 'yellow';
  }

}
