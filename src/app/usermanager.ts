import {User} from './user';

class UserManager {
    users: Array<User>;
    constructor() {
        this.users = [];
        this._setup();
    }

    _setup() {
        this._makeRequest('GET', '/uug/v1/users', undefined).then((data: string) => {
            this._processUsers(JSON.parse(data));
        });
    }

    _processUsers(usrs) {
        usrs.forEach(usr => {
            const ind = this._userIndex(usr);
            const u = new User(usr.id, usr.firstname, usr.lastname, usr.occupation, usr.gender);
            if (ind === -1) {
                this.users.push(u);
                return;
            }

            this.users.splice(ind, 1, u);
        });

        //this.emit('userschanged');
    }

    _userIndex(user) {
        let retVal = -1;

        this.users.forEach(usr => {
            if (usr.id === user.id) {
                retVal = this.users.indexOf(usr);
            }
        });

        return retVal;
    }

    createUsers(number) {
        this._makeRequest('POST', '/uug/v1/create', {numbertocreate: number}).then((data: string) => {
            this._processUsers(JSON.parse(data));
        });
    }

    updateUsers(number) {
        this._makeRequest('PUT', '/uug/v1/updaterandom', {numbertoupdate: number}).then((data: string) => {
            this._processUsers(JSON.parse(data));
        });
    }

    clearUsers() {
        this._makeRequest('DELETE', '/uug/v1/clear', undefined).then((data: string) => {
            this.users = [];
            //this.emit('userschanged');
        });
    }

    _makeRequest(method: string, url: string, data: object) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                    return;
                }

                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };

            xhr.onerror = () => {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            }

            if (data) {
                xhr.send(JSON.stringify(data));
            } else {
                xhr.send();
            }
        });
    }
}

export default UserManager;