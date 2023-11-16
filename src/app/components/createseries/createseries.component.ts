import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Personajes } from 'src/app/models/Personajes';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-createseries',
  templateUrl: './createseries.component.html',
  styleUrls: ['./createseries.component.css']
})
export class CreateseriesComponent implements OnInit {
  public personaje!: Personajes;
  @ViewChild('idPersonaje') idSerieRef!: ElementRef;
  @ViewChild('idSerie') idPersonajeRef!: ElementRef;
  @ViewChild('nombre') nombreRef!: ElementRef;
  @ViewChild('imagen') imagenRef!: ElementRef;

  constructor(private _service: SeriesService, private _router: Router, private _activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

  }

  createPersonaje(): void {
    var id_personaje = parseInt(this.idPersonajeRef.nativeElement.value);
    var id_serie = parseInt(this.idSerieRef.nativeElement.value);
    var nombre = this.nombreRef.nativeElement.value;
    var imagen = this.imagenRef.nativeElement.value;
    var newSerie= new Personajes(id_personaje, nombre, imagen, id_serie);
    this._service.postPersonaje(newSerie).subscribe(response =>{
      console.log("se creo el personaje");
      this._router.navigate(['/personajes', this.personaje.idSerie]);
    })
  }


}
