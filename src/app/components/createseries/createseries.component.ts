import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { Personajes } from 'src/app/models/Personajes';
import { Series } from 'src/app/models/Series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-createseries',
  templateUrl: './createseries.component.html',
  styleUrls: ['./createseries.component.css'],
})
export class CreateseriesComponent implements OnInit {
  public series!: Array<Series>;
  public personajes!: Array<Personajes>;
  //public personaje!: Personajes;

  @ViewChild('idPersonaje') idPersonajeRef!: ElementRef;
  @ViewChild('idSerie') idSerieRef!: ElementRef;
  @ViewChild('nombre') nombreRef!: ElementRef;
  @ViewChild('imagen') imagenRef!: ElementRef;
  @ViewChild('selectserie') selectRef!: ElementRef;

  constructor(
    private _service: SeriesService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadSeries();
    this.loadPersonajes();
  }

  createPersonaje(): void {
    // var id_personaje = parseInt(this.idPersonajeRef.nativeElement.value);
    //var id_serie = parseInt(this.idSerieRef.nativeElement.value);
    var id_serie = parseInt(this.selectRef.nativeElement.value);
    console.log(id_serie);
    
    var nombre = this.nombreRef.nativeElement.value;
    var imagen = this.imagenRef.nativeElement.value;
    var newSerie = new Personajes(0, nombre, imagen, id_serie);
    console.log(newSerie);
    console.log(id_serie);
    if (newSerie != null) {
      this._service.postPersonaje(newSerie).subscribe((response) => {
        console.log('se creo el personaje', response);        
        this._router.navigate(['/personajes', id_serie]);
      });
    } else {
      console.log('No se pudo crear');
    }
  }

  loadPersonajes(): void {
    this._service.getPersonajes().subscribe((response) => {
      this.personajes = response; //  as Array<Personajes>;
    });
  }

  loadSeries(): void {
    this._service.getSeries().subscribe((response) => {
      this.series = response;
    });
  }
}
