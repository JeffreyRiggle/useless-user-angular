import { Component, Input } from '@angular/core';
import usermanager from './usermanager';
import { User } from './user';

@Component({
  selector: 'user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
    _user: User;
    isFemale: boolean;

    constructor() {
        this.isFemale = false;
    }

    @Input()
    set user(user: User) {
        this._user = user;

        if (this._user.gender === 'f') {
            this.isFemale = true;
        } else {
            this.isFemale = false;
        }
    }

    get user(): User {
        return this._user;
    }
}
