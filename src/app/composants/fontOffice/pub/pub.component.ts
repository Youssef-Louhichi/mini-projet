import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.css']
})
export class PubComponent implements OnInit {
  ngOnInit(): void {


    const url = 'https://imdb-top-100-movies1.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b1be7fce16msh3c6684901e055d3p12ba3ajsn44d644f006b5',
        'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
      }
    };




    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        let car = "";
        let i = 0;
        data.slice(0, 10).map((values) => {
          car += `<div class="carousel-item `;
          if (i == 0) {
            car += 'active';
          }
          car += `"><img src="${values.images[2][1]}" class="d-block w-25 h-25 mx-auto" >
          <div class="carousel-caption">
          <h2>${i + 1}.</h2>
          <h1>${values.title}</h1>
      </div></div>`;
          i++;
        })
        document.getElementById("carContainerTop").innerHTML = car;


      })




    const url1 = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
    const options1 = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd251f4cd49msh46c6cdc57c7ecffp19f194jsn4d667816c3d8',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    fetch(url1, options1)
      .then(response => response.json())
      .then(data => {

        let car = "";
        let i = 0;
        data.results.map(values => {

          if (values.primaryImage != null) {
            console.log(values.primaryImage.url)
            car += `<div class="carousel-item `;
            if (i == 0) {
              car += 'active';
            }
            car += `"><img src="${values.primaryImage.url}" class="d-block  mx-auto" style="height:500px;width:300px">
        <div class="carousel-caption">
        <h1>${values.originalTitleText.text}</h1>
        </div></div>`;
            i++;
          }
        })
        document.getElementById("carContainerUp").innerHTML = car;
      })



  }



}
