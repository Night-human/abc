export class User {
    id: number ;
    name: string ;
    lastName: string;
    phone: string;
    position: string;

    constructor(id: number, name:string, lastName: string, phone: string, position: string)
    {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.position = position;
    }
}