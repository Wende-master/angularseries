import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Personajes } from 'src/app/models/Personajes';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajes!: Array<Personajes>;
  public id!: number;

  constructor(private _service: SeriesService, private _activeRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.id = parametros['idserie'];
      console.log(this.id)
      this.findPersonajes(this.id);
    })
  }

  findPersonajes(idSerie: number): void {
    this._service.findPersonajesSerie(idSerie.toString()).subscribe(response => {
      this.personajes = response;

    })
  }

}
