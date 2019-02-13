import { AccountService } from './../account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
constructor(private accountService: AccountService) {

}

  isAuthenticated() {
    return this.accountService.isAuthenticated();
  }
}
