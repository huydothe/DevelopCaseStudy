export class Room {
    protected floor:number;
    protected nameRoom: number;
    protected type: string;
    protected status: boolean = true;

    constructor(floor: number, nameRoom: number, type: string, status: boolean = true) {
        this.floor = floor;
        this.nameRoom = nameRoom;
        this.type = type;
        this.status = status;
    }
    getFloor=()=>this.floor;

    setFloor=(floor)=>this.floor=floor;

    getNameRoom=()=>this.nameRoom;

    setNameRoom=(nameRoom)=>this.nameRoom=nameRoom;

    getType=()=>this.type;

    setType=(type)=>this.type=type

    getStatus=()=>this.status;

    setStatus=(status)=>this.status=status;
}