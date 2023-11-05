import { MembreResponsable } from "./membre-responsable";

export class Activity {
    constructor(public id:number,public int:string,public photo:string,
        public date_act:Date, public categorie:string,public lieu:string,public responsables:MembreResponsable[],
        public prix:number,public limite:boolean){}
}
