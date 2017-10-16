import { Component } from '@angular/core';
import UserManager from './usermanager';
import usermanager from './sharedusermanager';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    usermanager: UserManager;

    constructor() {
        this.usermanager = usermanager;
    }
}
