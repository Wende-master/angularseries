import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Series } from 'src/app/models/Series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-detallesseries',
  templateUrl: './detallesseries.component.html',
  styleUrls: ['./detallesseries.component.css']
})
export class DetallesseriesComponent implements OnInit{
  public serie!: Series;
  constructor(private _service: SeriesService, private _acitveRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this._acitveRoute.params.subscribe((parametros: Params)=>{
      var id = parseInt(parametros['id']);
      //console.log(id);
      this.findSerie(id);
    })
  }

  findSerie(id: number): void{
    this._service.findSeriesById(id.toString()).subscribe(response =>{
      console.log(response);
      this.serie = response;
    })
  }


}
