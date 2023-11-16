import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Personajes } from 'src/app/models/Personajes';
import { Series } from 'src/app/models/Series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-editarseries',
  templateUrl: './editarseries.component.html',
  styleUrls: ['./editarseries.component.css'],
})
export class EditarseriesComponent implements OnInit {
  public series!: Array<Series>;
  //public serie!: Series;
  public personajes!: Array<Personajes>;
  //public personaje!: Personajes;

  @ViewChild('selectpersonaje') selectPersonajeRef!: ElementRef;
  @ViewChild('selectserie') selectSerieRef!: ElementRef;

  constructor(private _service: SeriesService, private _route: Router) {

  }

  ngOnInit(): void {
    this.loadSeries();
    this.loadPersonajes();

  }

  putSerie(): void {
    var idPersonaje = this.selectPersonajeRef.nativeElement.value;    
    var idSerie = this.selectSerieRef.nativeElement.value;
    this._service.putSerie(idPersonaje, idSerie).subscribe(response =>{

      this._route.navigate(['/']);
    })
  }


  loadSeries(): void {
    this._service.getSeries().subscribe(response => {
      this.series = response;
    })
  }

  loadPersonajes(): void {
    this._service.getPersonajes().subscribe(response => {
      this.personajes = response;
    })
  }

}
