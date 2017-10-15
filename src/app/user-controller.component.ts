import { Component } from '@angular/core';

@Component({
  selector: 'user-controller',
  templateUrl: './user-controller.component.html',
  styleUrls: ['./user-controller.component.css']
})
export class UserControllerComponent {
    valid: boolean;
    numberOfUsers: number;

    constructor() {
        this.valid = false;
        this.numberOfUsers = 0;
    }

    createUser() {
        alert('number of Users ' + this.numberOfUsers);
    }

    updateNumberOfUsers($event) {
        var newValue = Number.parseInt($event.target.value)
        this.valid = !Number.isNaN(newValue);
        if (this.valid) {
            this.numberOfUsers = newValue;
        }
    }
}
