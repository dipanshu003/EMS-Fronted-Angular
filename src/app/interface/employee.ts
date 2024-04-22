export interface Employee {

	id:number;
	name:string;
    desg:string;
    status:string;
    address:{
        id:number,
        city:string,
        country:string,
        state:string
    }
    email:string;
    password:string;
    addedDate:string;

}