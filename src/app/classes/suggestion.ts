export class Suggestion {
    static n:number=0;
    public id:number;
    constructor(public nom:string,public mail:string,public sugg:string,public date_post:Date){
        this.id=Suggestion.n;
        Suggestion.n++;
    }
}
