import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/Series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public series!: Array<Series>;


  constructor(private _service: SeriesService) {

  }

  ngOnInit(): void {
    this.loadSeries();
  }

  loadSeries(): void {
    this._service.getSeries().subscribe(response => {
      this.series = response;
    })
  }

}
