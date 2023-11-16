import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personajes } from '../models/Personajes';
import { Series } from '../models/Series';
@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private _http: HttpClient) {}

  getSeries(): Observable<any> {
    var request = 'api/series';
    var ur = environment.urlApi + request;
    return this._http.get(ur);
  }

  findSeriesById(id: string): Observable<any> {
    var request = 'api/series/' + id;
    var url = environment.urlApi + request;
    return this._http.get(url);
  }

  findPersonajesSerie(idSerie: string): Observable<any> {
    var request = 'api/series/personajesserie/' + idSerie;
    var url = environment.urlApi + request;
    return this._http.get(url);
  }

  postPersonaje(personaje: Personajes): Observable<any> {
    var json = JSON.stringify(personaje);
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    var request = 'api/personajes';
    var url = environment.urlApi + request;
    return this._http.post(url, json, { headers: headers });
  }

  getPersonajes(): Observable<any> {
    var request = 'api/personajes';
    var url = environment.urlApi + request;
    return this._http.get(url);
  }

  putSerie(idPersonaje: number, idSerie: number): Observable<any> {
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    var request = 'api/personajes/' + idPersonaje + '/' + idSerie;
    var url = environment.urlApi + request;
    return this._http.put(url, { headers: headers });
  }
}
