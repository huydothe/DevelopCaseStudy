export class Booking {
    protected numberOfDay: number;
    protected typeOfRoom: string;
    protected pricesOfRoom: number;
    protected infoOfGuest:string;

    constructor(numberOfDay: number, typeOfRoom: string, pricesOfRoom: number, infoOfGuest: string) {
        this.numberOfDay = numberOfDay;
        this.typeOfRoom = typeOfRoom;
        this.pricesOfRoom = pricesOfRoom;
        this.infoOfGuest = infoOfGuest;
    }

    getNumberOfDay(): number {
        return this.numberOfDay;
    }

    setNumberOfDay(numberOfDay:number) {
        this.numberOfDay = numberOfDay;
    }

    getTypeOfRoom(): string {
        return this.typeOfRoom;
    }

    setTypeOfRoom(typeOfRoom: string) {
        this.typeOfRoom = typeOfRoom;
    }

    getPricesOfRoom(): number {
        return this.pricesOfRoom;
    }

    setPricesOfRoom(pricesOfRoom: number) {
        this.pricesOfRoom = pricesOfRoom;
    }

    getInfoOfGuest(): string {
        return this.infoOfGuest;
    }

    setInfoOfGuest(infoOfGuest: string) {
        this.infoOfGuest = infoOfGuest;
    }
}