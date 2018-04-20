import { Component, OnInit } from '@angular/core';
import { TownService } from '../town/town.service';
import { Town } from '../model/town';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
})
export class MeteoComponent implements OnInit {
  town: Town;
  private townService: TownService;
  constructor(private http: HttpClient) {
	  this.townService = new TownService(http)
  }

  ngOnInit() {
    this.townService.getTown(3).subscribe(town => { //Modifier ici pour une ville différente
      this.town=town;
    });
  }

}
