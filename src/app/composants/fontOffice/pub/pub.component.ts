import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.css']
})
export class PubComponent implements OnInit{
  ngOnInit(): void {
  
 
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '06e4a3233fmsh85e767b07c4ccf3p1e2206jsn844f55a4324f',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };
    
        
        fetch(url, options).then(data => {
          return data.json(); }).then((objectData)=>{console.log(objectData[0].title) ;
          let table="";
          objectData.map((values)=>{
            table+=`<tr> <td>${values.title}</td>  <td>${values.rank}</td>  <td><img src="${values.image}"></img></td> </tr>`;
          })
          document.getElementById("tablee").innerHTML=table;
    
    
        })

       

    }


  
}
