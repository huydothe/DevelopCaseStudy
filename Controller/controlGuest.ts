import {Guest} from "../Guest/Guest";
import {Booking} from "../Hotel/Booking";
import {Room} from "../Hotel/Room";

export class ControlGuest {
   private InfoOfGuest=[];

    constructor(InfoOfGuest: any[]) {
        this.InfoOfGuest = InfoOfGuest;
    }

    setGuest(guest){
        this.InfoOfGuest.push(guest);
    }
    deleteGuest(ID){
        for(let i=0; i<this.InfoOfGuest.length; i++){
            if(this.InfoOfGuest[i].ID === ID){
                this.InfoOfGuest.splice(i,1);
            }
        }
    }
    editInfoOfGuest(ID,firstname=this.InfoOfGuest.getFirstName(),lastname=this.getLastName(),dateofbirth=this.getDateOfBirth(), ID){
        for(let i=0; i<this.InfoOfGuest.length; i++){
            if(this.InfoOfGuest[i].ID === ID){
                this.InfoOfGuest[i].firstname=firstname;
                this.InfoOfGuest[i].lastname=lastname;
                this.InfoOfGuest[i].dateofbirth=dateofbirth;
            }
        }
    }
}