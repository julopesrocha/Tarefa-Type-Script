import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  ///array de series
  public series: any[] = [
    {
      name: "Grace and Frankie",
      avaliation: 5
    },
    {
      name: "Good Place",
      avaliation: 3
    },
    {
      name: "The Walking Dead",
      avaliation: 4
    },
  ]
}
