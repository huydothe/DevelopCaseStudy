export class Guest {
    private firstname : string;
    private lastname : string;
    private dateofbirth : Date;
    private ID: number;

    constructor(firstname: string, lastname: string, dateofbirth: Date, ID: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dateofbirth = dateofbirth;
        this.ID = ID;
    }

    getFirstName(): string {
        return this.firstname;
    }

    setFirstName(firstname: string) {
        this.firstname = firstname;
    }

    getLastName(): string {
        return this.lastname;
    }

    setLastName(lastname: string) {
        this.lastname = lastname;
    }

    getDateOfBirth(): Date {
        return this.dateofbirth;
    }

    setDateOfBirth(dateOfBirth: Date) {
        this.dateofbirth = dateOfBirth;
    }

    getID(): number {
        return this.ID;
    }

    setID(ID: number) {
        this.ID = ID;
    }
}