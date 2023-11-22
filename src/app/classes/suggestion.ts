export class Suggestion {
    public id:number;
    constructor(public nom:string,public mail:string,public sugg:string,public date_post:Date){
        this.id=this.getId();

    }

    private getId(): number {
        let id:number;
        if(localStorage.getItem('IdS') == null){
             id=3;
        }
        else{
          id = Number(localStorage.getItem('IdS'));
        }
        localStorage.setItem('IdS', String(id + 1));
        return id;
      }
}
