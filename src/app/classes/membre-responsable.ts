export class MembreResponsable {
    public id:number;
    constructor(public prenom:string,public nom:string,public tel:string){
        this.id=this.getId();
    }

    private getId(): number {
        let id:number;
        if(localStorage.getItem('IdM') == null){
             id=4;
        }
        else{
          id = Number(localStorage.getItem('IdM'));
        }
        localStorage.setItem('IdM', String(id + 1));
        return id;
      }
}
