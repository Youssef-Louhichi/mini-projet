export class MembreResponsable {
    static n:number=4;
    public id:number;
    constructor(public prenom:string,public nom:string,public tel:string){
        this.id=MembreResponsable.n;
        MembreResponsable.n++;
    }
}
