"use strict";(self.webpackChunkMini_projet=self.webpackChunkMini_projet||[]).push([[614],{2614:(k,f,c)=>{c.r(f),c.d(f,{FrontModule:()=>M});var r=c(6814),d=c(9351),t=c(6689);let v=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-about-us"]],decls:23,vars:0,consts:[[1,"py-3","py-md-5","py-xl-8"],[1,"container"],[1,"row"],[1,"col-12","col-md-10","col-lg-8"],[1,"fs-5","mb-2","text-secondary","text-uppercase"],[1,"display-7","mb-4"],["type","button","routerLink","/home",1,"btn","btn-lg","btn-primary","mb-3","mb-md-4","mb-xl-5"],[1,"row","gy-3","gy-md-4","gy-lg-0"],[1,"col-12","col-lg-12"],[1,"card","bg-light","p-3","m-0"],[1,"row","gy-3","gy-md-0","align-items-md-center"],[1,"col-md-5"],["src","./assets/about us.jpg",1,"img-fluid","rounded-start"],[1,"col-md-7"],[1,"card-body","p-0"],[1,"card-title","h4","mb-3"],[1,"card-text","lead"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),t._uU(5,"Who we are?"),t.qZA(),t.TgZ(6,"h2",5),t._uU(7,"Iset'Cima est bien plus qu'un simple club de cin\xe9ma \xe0 ISET Charguia. Nous sommes une communaut\xe9 passionn\xe9e par le monde du cin\xe9ma, d\xe9di\xe9e \xe0 explorer et c\xe9l\xe9brer la diversit\xe9 et la magie du septi\xe8me art. Notre club s'engage \xe0 offrir une exp\xe9rience cin\xe9matographique enrichissante \xe0 nos membres et \xe0 la communaut\xe9 \xe9tudiante."),t.qZA(),t.TgZ(8,"a",6),t._uU(9,"Consultez Nos Activit\xe9es"),t.qZA()()()(),t.TgZ(10,"div",1)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11),t._UZ(16,"img",12),t.qZA(),t.TgZ(17,"div",13)(18,"div",14)(19,"h2",15),t._uU(20,"What we do?"),t.qZA(),t.TgZ(21,"p",16),t._uU(22,"Nous organisons r\xe9guli\xe8rement des \xe9v\xe9nements captivants, allant de projections de films in\xe9dits \xe0 des d\xe9bats anim\xe9s sur l'industrie cin\xe9matographique contemporaine. De plus, nous proposons des formations approfondies pour ceux qui aspirent \xe0 mieux comprendre les techniques cin\xe9matographiques, allant de la r\xe9alisation \xe0 la post-production. Mais notre engagement ne se limite pas aux murs de l'universit\xe9 : nous organisons \xe9galement des sorties pour assister \xe0 des festivals de cin\xe9ma, des visites de studios et des rencontres avec des professionnels de l'industrie. Rejoignez-nous pour explorer le pouvoir transformateur du cin\xe9ma et cr\xe9er des souvenirs qui dureront toute une vie."),t.qZA()()()()()()()()())},dependencies:[d.rH],styles:["img[_ngcontent-%COMP%]{margin-left:50px;width:300px;height:300px}"]})}return e})();var h=c(7460);let b=(()=>{class e{transform(i){return i[0]+i[1]+" "+i[2]+i[3]+i[4]+" "+i[5]+i[6]+i[7]}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275pipe=t.Yjl({name:"numtel",type:e,pure:!0})}return e})();function Z(e,a){if(1&e&&(t.TgZ(0,"div")(1,"h4"),t._uU(2,"Prix :"),t.qZA(),t._UZ(3,"i",15),t.TgZ(4,"strong"),t._uU(5),t.qZA()()),2&e){const i=t.oxw();t.xp6(5),t.hij("",i.act.prix,"DT")}}function _(e,a){1&e&&(t.TgZ(0,"strong"),t._uU(1,"Cette activit\xe9 est "),t.TgZ(2,"span",16),t._uU(3,"Gratuit"),t.qZA()())}function A(e,a){if(1&e&&(t.TgZ(0,"li",18),t._uU(1),t.ALo(2,"uppercase"),t.ALo(3,"titlecase"),t.ALo(4,"numtel"),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.lnq(" ",t.lcZ(2,3,i.nom)," ",t.lcZ(3,5,i.prenom)," T\xe9lephone: ",t.lcZ(4,7,i.tel)," ")}}function y(e,a){if(1&e&&(t.ynx(0),t._uU(1," Le nombre de participants \xe0 cette activit\xe9 est limit\xe9\xe9, vous devez contacter nos membres responsables pour participer \xe0 cette activit\xe9 et avoir plus d'informations: "),t.TgZ(2,"ul"),t.YNc(3,A,5,9,"li",17),t.qZA(),t.BQk()),2&e){const i=t.oxw();t.xp6(3),t.Q6J("ngForOf",i.act.responsables)}}const T=function(e){return{"card-header":!0,"text-center":!0,"bg-success":e}},U=function(e){return{"card-text":!0,"free-title":e}};let x=(()=>{class e{constructor(i,o){this.activatedRoute=i,this.service=o}ngOnInit(){this.service.getActs().subscribe(i=>{this.lesact=i,this.identifiant=this.activatedRoute.snapshot.params.id,this.act=this.lesact.find(o=>o.id==this.identifiant)})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(d.gz),t.Y36(h.B))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-activite-selected"]],decls:38,vars:22,consts:[["routerLink","/home",1,"btn","btn-light"],[1,"fa-solid","fa-arrow-left","fa-xl"],[1,"py-3","py-md-5","py-xl-8"],[1,"container","mt-4","d-block"],[1,"card","w-75",2,"margin-left","120px"],[3,"ngClass"],[1,"card-body"],[1,"text-center"],[1,"rounded-circle",2,"height","270px","width","300px",3,"src"],[1,"card-title"],[1,"card-text"],[4,"ngIf","ngIfElse"],["gratuit",""],[4,"ngIf"],[1,"card-footer"],[1,"fa-solid","fa-coins"],[2,"color","green"],["style","list-style: none;",4,"ngFor","ngForOf"],[2,"list-style","none"]],template:function(o,n){if(1&o&&(t.TgZ(0,"a",0),t._UZ(1,"i",1),t.qZA(),t.TgZ(2,"section",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1",5),t._uU(7),t.qZA()(),t.TgZ(8,"div",6)(9,"div",7),t._UZ(10,"img",8),t.qZA(),t.TgZ(11,"div")(12,"h4"),t._uU(13,"Identifiant :"),t.qZA(),t.TgZ(14,"h2",9),t._uU(15),t.qZA(),t.TgZ(16,"h4"),t._uU(17,"Date :"),t.qZA(),t.TgZ(18,"p",10),t._uU(19),t.ALo(20,"date"),t.qZA(),t.TgZ(21,"h4"),t._uU(22,"Categorie :"),t.qZA(),t.TgZ(23,"p",10),t._uU(24),t.ALo(25,"titlecase"),t.qZA(),t.TgZ(26,"h4"),t._uU(27,"Lieu :"),t.qZA(),t.TgZ(28,"p",10),t._uU(29),t.ALo(30,"titlecase"),t.qZA(),t._UZ(31,"br"),t.YNc(32,Z,6,1,"div",11),t.YNc(33,_,4,0,"ng-template",null,12,t.W1O),t._UZ(35,"br"),t.YNc(36,y,4,1,"ng-container",13),t.qZA()(),t._UZ(37,"div",14),t.qZA()()()),2&o){const l=t.MAs(34);t.xp6(5),t.Q6J("ngClass",t.VKq(18,T,0==n.act.prix)),t.xp6(1),t.Q6J("ngClass",t.VKq(20,U,0==n.act.prix)),t.xp6(1),t.Oqu(n.act.int),t.xp6(3),t.Q6J("src",n.act.photo,t.LSH),t.xp6(5),t.Oqu(n.act.id),t.xp6(4),t.Oqu(t.xi3(20,11,n.act.date_act,"longDate")),t.xp6(5),t.Oqu(t.lcZ(25,14,n.act.categorie)),t.xp6(5),t.Oqu(t.lcZ(30,16,n.act.lieu)),t.xp6(3),t.Q6J("ngIf",0!=n.act.prix)("ngIfElse",l),t.xp6(4),t.Q6J("ngIf",n.act.limite)}},dependencies:[r.mk,r.sg,r.O5,d.rH,r.gd,r.rS,r.uU,b],styles:["p[_ngcontent-%COMP%]{font-size:large}.free-title[_ngcontent-%COMP%]{color:#f0f8ff}"]})}return e})();var s=c(95);class q{constructor(a,i,o,n){this.nom=a,this.mail=i,this.sugg=o,this.date_post=n,this.id=this.getId()}getId(){let a;return a=null==localStorage.getItem("IdS")?3:Number(localStorage.getItem("IdS")),localStorage.setItem("IdS",String(a+1)),a}}var E=c(1432);function C(e,a){1&e&&(t.TgZ(0,"div",12),t._uU(1," Votre nom svp ):\n"),t.qZA())}function I(e,a){1&e&&(t.TgZ(0,"div",12),t._uU(1," ce champ est obligatiore !\n"),t.qZA())}function w(e,a){1&e&&(t.TgZ(0,"div",12),t._uU(1," Pas de message ),:\n"),t.qZA())}let N=(()=>{class e{ngOnInit(){}get nom(){return this.sugges.get("nom")}get mail(){return this.sugges.get("mail")}get sugg(){return this.sugges.get("sugg")}constructor(i){this.ser=i,this.sugges=new s.cw({nom:new s.NI("",s.kI.required),mail:new s.NI("",s.kI.required),sugg:new s.NI("",s.kI.required),date:new s.NI("")})}send(){let i=this.sugges.get("nom").value,o=this.sugges.get("mail").value,n=this.sugges.get("sugg").value;this.newsugg=new q(i,o,n,new Date),this.ser.ajouter(this.newsugg).subscribe(),alert("votre suggestion a \xe9t\xe9 envoy\xe9 avec succes !"),this.sugges.reset()}onResetForm(){this.sugges.reset()}isValidP2(){return this.nom?.errors?.required&&this.nom?.touched}isValidP(){return this.mail?.errors?.required&&this.mail?.touched}isValidP3(){return this.sugg?.errors?.required&&this.sugg?.touched}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(E.f))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-ajouter-suggestion"]],decls:22,vars:5,consts:[[1,"py-3","py-md-5","py-xl-8"],[1,"container"],[1,"row","g-2",3,"formGroup"],[1,"col-md-6"],["type","text","placeholder","nom et prenom","formControlName","nom","placeholder","flen el fouleni",1,"form-control","form-control-sm"],["class","alert alert-warning",4,"ngIf"],["for","email"],["type","email","placeholder","adresse email","formControlName","mail","placeholder","xxxxx@mailcom",1,"form-control","form-control-sm"],[1,"col-md-12"],["cols","80","rows","4","placeholder","votre suggestion","formControlName","sugg","placeholder","votre message",1,"form-control","form-control-sm"],["type","button","value","Envoyer",1,"btn","btn-success",3,"disabled","click"],["type","button","value","Effacer","mat-button","",1,"btn","btn-secondary",3,"click"],[1,"alert","alert-warning"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._uU(3,"Vous pouvez nous envoyer vos suggestion a travers ce formulaire !"),t.qZA(),t.TgZ(4,"form",2)(5,"div",3)(6,"label"),t._uU(7,"Vous etes :"),t.qZA(),t._UZ(8,"input",4),t.YNc(9,C,2,0,"div",5),t.qZA(),t.TgZ(10,"div",3)(11,"label",6),t._uU(12,"votre adresse mail :"),t.qZA(),t._UZ(13,"input",7),t.YNc(14,I,2,0,"div",5),t.qZA(),t.TgZ(15,"div",8)(16,"label"),t._uU(17,"Votre suggestion :"),t.qZA(),t._UZ(18,"textarea",9),t.YNc(19,w,2,0,"div",5),t.qZA(),t.TgZ(20,"input",10),t.NdJ("click",function(){return n.send()}),t.qZA(),t.TgZ(21,"input",11),t.NdJ("click",function(){return n.onResetForm()}),t.qZA()()()()),2&o&&(t.xp6(4),t.Q6J("formGroup",n.sugges),t.xp6(5),t.Q6J("ngIf",n.isValidP2()),t.xp6(5),t.Q6J("ngIf",n.isValidP()),t.xp6(5),t.Q6J("ngIf",n.isValidP3()),t.xp6(1),t.Q6J("disabled",n.sugges.invalid))},dependencies:[r.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],styles:["input.ng-valid[_ngcontent-%COMP%]{border-left:3px solid green}input.ng-invalid[_ngcontent-%COMP%]{border-left:3px solid red}textarea.ng-valid[_ngcontent-%COMP%]{border-left:3px solid green}textarea.ng-invalid[_ngcontent-%COMP%]{border-left:3px solid red}h1[_ngcontent-%COMP%]{text-align:center}"]})}return e})();var S=c(5565),L=c(2296);const J=function(e){return["/act",e]};let F=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-listenfant"]],inputs:{li:"li"},decls:14,vars:12,consts:[[1,"card","w-100",2,"width","400px"],[1,"card-head","text-center"],["alt","Card image",1,"card-img-top","w-100",2,"height","250px",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["routerLinkActive","active",1,"btn","btn-warning",3,"routerLink"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h4",4),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"titlecase"),t.qZA(),t.TgZ(9,"p",5),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"a",6),t._uU(13,"Details"),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("src",n.li.photo,t.LSH),t.xp6(3),t.Oqu(n.li.int),t.xp6(2),t.Oqu(t.lcZ(8,5,n.li.categorie)),t.xp6(3),t.hij("Le : ",t.xi3(11,7,n.li.date_act,"dd/MM/yyyy"),""),t.xp6(2),t.Q6J("routerLink",t.VKq(10,J,n.li.id)))},dependencies:[d.rH,d.Od,r.rS,r.uU]})}return e})();function O(e,a){if(1&e&&(t.TgZ(0,"div",15),t._UZ(1,"app-listenfant",16),t.qZA()),2&e){const i=a.$implicit;t.xp6(1),t.Q6J("li",i)}}const P=[{path:"home",title:"Home",component:(()=>{class e{constructor(i,o){this.activityservice=i,this.adService=o}ngOnInit(){this.activityservice.getActs().subscribe(i=>{this.activities=i,this.activitiesAfficher=this.activities}),this.adService.getAdmin().subscribe(i=>this.user=i.username),this.Filtre=new s.cw({cat:new s.NI(""),date:new s.NI("")})}filtre(){let i=this.Filtre.get("cat").value,o=this.Filtre.get("date").value;this.activitiesAfficher=this.activities,""!=i&&(this.activitiesAfficher=this.activitiesAfficher.filter(n=>n.categorie==i)),""!=o&&(this.activitiesAfficher=this.activitiesAfficher.filter(n=>n.date_act>=o))}reset(){this.Filtre.reset({cat:[""]}),this.activitiesAfficher=this.activities}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(h.B),t.Y36(S.l))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-liste-activite"]],decls:25,vars:2,consts:[[1,"container","mt-3"],[2,"font-size","70px","margin-left","70px"],[1,"fa-solid","fa-film"],["action","",1,"row","g-3",2,"margin-top","25px","margin-left","200px",3,"formGroup"],[1,"col-md-4"],["formControlName","cat",1,"form-select",3,"change"],["value","formation"],["value","event"],["value","sortie"],["value","","selected",""],["type","date","formControlName","date",1,"form-control",3,"change"],["type","reset","mat-button","",1,"btn","btn-secondary",3,"click"],[1,"fa-solid","fa-arrow-rotate-left"],[1,"row"],["class","col-md-4","style","padding: 10px;",4,"ngFor","ngForOf"],[1,"col-md-4",2,"padding","10px"],[3,"li"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"h1",1),t._UZ(2,"i",2),t._uU(3," Consultez Nos Activit\xe9es "),t._UZ(4,"i",2),t.qZA(),t.TgZ(5,"form",3)(6,"h2"),t._uU(7,"Filtrer:"),t.qZA(),t.TgZ(8,"div",4)(9,"select",5),t.NdJ("change",function(){return n.filtre()}),t.TgZ(10,"option",6),t._uU(11,"Formation"),t.qZA(),t.TgZ(12,"option",7),t._uU(13,"Evennement"),t.qZA(),t.TgZ(14,"option",8),t._uU(15,"Sortie"),t.qZA(),t.TgZ(16,"option",9),t._uU(17,"tout"),t.qZA()()(),t.TgZ(18,"div",4)(19,"input",10),t.NdJ("change",function(){return n.filtre()}),t.qZA()(),t.TgZ(20,"div",4)(21,"button",11),t.NdJ("click",function(){return n.reset()}),t._UZ(22,"i",12),t.qZA()()(),t.TgZ(23,"div",13),t.YNc(24,O,2,1,"div",14),t.qZA()()),2&o&&(t.xp6(5),t.Q6J("formGroup",n.Filtre),t.xp6(19),t.Q6J("ngForOf",n.activitiesAfficher))},dependencies:[r.sg,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.sg,s.u,L.lW,F]})}return e})()},{path:"act/:id",title:"Activit\xe9e",component:x},{path:"aboutus",title:"About Us",component:v},{path:"pub",title:"Movies",component:(()=>{class e{ngOnInit(){fetch("https://imdb-top-100-movies1.p.rapidapi.com/",{method:"GET",headers:{"X-RapidAPI-Key":"b1be7fce16msh3c6684901e055d3p12ba3ajsn44d644f006b5","X-RapidAPI-Host":"imdb-top-100-movies1.p.rapidapi.com"}}).then(p=>p.json()).then(p=>{let u="",m=0;p.slice(0,10).map(g=>{u+='<div class="carousel-item ',0==m&&(u+="active"),u+=`"><img src="${g.images[2][1]}" class="d-block w-25 h-25 mx-auto" >\n          <div class="carousel-caption">\n          <h2>${m+1}.</h2>\n          <h1>${g.title}</h1>\n      </div></div>`,m++}),document.getElementById("carContainerTop").innerHTML=u}),fetch("https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",{method:"GET",headers:{"X-RapidAPI-Key":"d251f4cd49msh46c6cdc57c7ecffp19f194jsn4d667816c3d8","X-RapidAPI-Host":"moviesdatabase.p.rapidapi.com"}}).then(p=>p.json()).then(p=>{let u="",m=0;p.results.map(g=>{null!=g.primaryImage&&(console.log(g.primaryImage.url),u+='<div class="carousel-item ',0==m&&(u+="active"),u+=`"><img src="${g.primaryImage.url}" class="d-block  mx-auto" style="height:500px;width:300px">\n        <div class="carousel-caption">\n        <h1>${g.originalTitleText.text}</h1>\n        </div></div>`,m++)}),document.getElementById("carContainerUp").innerHTML=u})}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-pub"]],decls:43,vars:0,consts:[[1,"py-3","py-md-5","py-xl-8"],[1,"container"],[1,"fa-solid","fa-film"],["id","demo","data-bs-ride","carousel",1,"carousel","slide",2,"background-color","#090909"],[1,"carousel-indicators"],["type","button","data-bs-target","#demo","data-bs-slide-to","0",1,"active"],["type","button","data-bs-target","#demo","data-bs-slide-to","1"],["type","button","data-bs-target","#demo","data-bs-slide-to","2"],["type","button","data-bs-target","#demo","data-bs-slide-to","3"],["type","button","data-bs-target","#demo","data-bs-slide-to","4"],["type","button","data-bs-target","#demo","data-bs-slide-to","5"],["type","button","data-bs-target","#demo","data-bs-slide-to","6"],["type","button","data-bs-target","#demo","data-bs-slide-to","7"],["type","button","data-bs-target","#demo","data-bs-slide-to","8"],["type","button","data-bs-target","#demo","data-bs-slide-to","9"],["id","carContainerTop",1,"carousel-inner"],["type","button","data-bs-target","#demo","data-bs-slide","prev",1,"carousel-control-prev"],[1,"carousel-control-prev-icon"],["type","button","data-bs-target","#demo","data-bs-slide","next",1,"carousel-control-next"],[1,"carousel-control-next-icon"],[1,"container","mt-4","d-block"],["id","demoUp","data-bs-ride","carousel",1,"carousel","slide",2,"background-color","#090909"],["type","button","data-bs-target","#demoUp","data-bs-slide-to","0",1,"active"],["type","button","data-bs-target","#demoUp","data-bs-slide-to","1"],["type","button","data-bs-target","#demoUp","data-bs-slide-to","2"],["type","button","data-bs-target","#demoUp","data-bs-slide-to","3"],["type","button","data-bs-target","#demoUp","data-bs-slide-to","4"],["type","button","data-bs-target","#demoUp","data-bs-slide-to","5"],["type","button","data-bs-target","#demoUp","data-bs-slide-to","6"],["type","button","data-bs-target","#demoUp","data-bs-slide-to","7"],["id","carContainerUp",1,"carousel-inner"],["type","button","data-bs-target","#demoUp","data-bs-slide","prev",1,"carousel-control-prev"],["type","button","data-bs-target","#demoUp","data-bs-slide","next",1,"carousel-control-next"]],template:function(o,n){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1"),t._UZ(3,"i",2),t._uU(4," TOP 10 movies of all time "),t._UZ(5,"i",2),t.qZA(),t.TgZ(6,"div",3)(7,"div",4),t._UZ(8,"button",5)(9,"button",6)(10,"button",7)(11,"button",8)(12,"button",9)(13,"button",10)(14,"button",11)(15,"button",12)(16,"button",13)(17,"button",14),t.qZA(),t._UZ(18,"div",15),t.TgZ(19,"button",16),t._UZ(20,"span",17),t.qZA(),t.TgZ(21,"button",18),t._UZ(22,"span",19),t.qZA()(),t.TgZ(23,"div",20)(24,"h1"),t._UZ(25,"i",2),t._uU(26," Upcoming movies "),t._UZ(27,"i",2),t.qZA()(),t.TgZ(28,"div",21)(29,"div",4),t._UZ(30,"button",22)(31,"button",23)(32,"button",24)(33,"button",25)(34,"button",26)(35,"button",27)(36,"button",28)(37,"button",29),t.qZA(),t._UZ(38,"div",30),t.TgZ(39,"button",31),t._UZ(40,"span",17),t.qZA(),t.TgZ(41,"button",32),t._UZ(42,"span",19),t.qZA()()()())},styles:["h1[_ngcontent-%COMP%]{text-align:center}"]})}return e})()},{path:"sug",title:"Suggestion",component:N},{path:"",redirectTo:"home",pathMatch:"full"}];let j=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(P),d.Bz]})}return e})(),M=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[r.ez,j]})}return e})()}}]);