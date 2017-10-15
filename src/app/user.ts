export class User {
    id: number;
    firstName: string;
    lastName: string;
    occupation: string;
    gender: string;

    constructor(id: number, firstName: string, lastName: string, occupation: string, gender: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.gender = gender;
    }
}