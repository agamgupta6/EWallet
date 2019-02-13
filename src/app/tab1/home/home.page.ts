import { AccountService } from './../../account.service';
import { WalletService } from './../../wallet.service';
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
  account: any;

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
  }, ];
  constructor(private walletService: WalletService,
    private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountService.identity().then(res => {
      this.account = res;
      alert(JSON.stringify(this.account));
    });

  }

}
