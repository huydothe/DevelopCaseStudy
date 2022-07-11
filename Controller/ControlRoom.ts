import {Room} from "../Hotel/Room";

export class ControlRoom extends Room {

    constructor(floor: number, nameRoom: number, type: string, status: boolean) {
        super(floor, nameRoom, type, status);
    }
    checkRoom(){
        if(this.floor > 7 && this.floor <= 0){
            console.log("Khách sạn chỉ có tối đa là 7 tầng! \n Xin vui lòng chọn tầng khác")
        }
        else if(this.floor==1 && this.nameRoom > 110 && this.nameRoom < 101 ){
            console.log("Tầng 1 chỉ có tối đa là 10 phòng! \n Xin vui lòng chọn phòng từ 101 - 110");
        }
        else if(this.floor==2 && this.nameRoom > 120 && this.nameRoom < 111 ){
            console.log("Tầng 2 chỉ có tối đa là 10 phòng! \n Xin vui lòng chọn phòng từ 111 - 120");
        }
        else if(this.floor==3 && this.nameRoom > 130 && this.nameRoom < 121 ){
            console.log("Tầng 3 chỉ có tối đa là 10 phòng! \n Xin vui lòng chọn phòng từ 121 - 130");
        }
        else if(this.floor==4 && this.nameRoom > 140 && this.nameRoom < 131 ){
            console.log("Tầng 4 chỉ có tối đa là 10 phòng! \n Xin vui lòng chọn phòng từ 131 - 140");
        }
        else if(this.floor==5 && this.nameRoom > 150 && this.nameRoom < 141 ){
            console.log("Tầng 5 chỉ có tối đa là 10 phòng! \n Xin vui lòng chọn phòng từ 141 - 150");
        }
        else if(this.floor==6 && this.nameRoom > 110 && this.nameRoom < 101 ){
            console.log("Tầng 6 chỉ có tối đa là 10 phòng! \n Xin vui lòng chọn phòng từ 151 - 160");
        }
        else if(this.floor==7 && this.nameRoom > 110 && this.nameRoom < 101 ){
            console.log("Tầng 7 chỉ có tối đa là 10 phòng! \n Xin vui lòng chọn phòng từ 161 - 170");
        }
    }
    checkRent() {
        if (this.status) {
            console.log('Phòng trống');
        } else {
            console.log('Phòng đã được thuê');
        }
    }
    checkKingSide(){
        if( this.nameRoom===101 ||
            this.nameRoom===201 ||
            this.nameRoom===301 ||
            this.nameRoom===401 ||
            this.nameRoom===501 ||
            this.nameRoom===601 ||
            this.nameRoom===701 ){
            console.log('Đây là phòng King Side');
        }else {
            console.log('Đây là phòng thường');
        }
    }
}