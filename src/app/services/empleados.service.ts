import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/Users';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private _http: HttpClient) {

  }

  loginEmpleados(user: Users): Observable<any> {
    var json = JSON.stringify(user);
    var request = "auth/login";
    var headers = new HttpHeaders().set('Content-Type', 'application/json');
    var url = environment.urlEmpleados + request;
    console.log(url);
    return this._http.post(url, json, { headers });
  }

  authEmpleado(token: string): Observable<any> {
    var request = "api/empleados";
    var headers = new HttpHeaders({ 'Authorization': 'Bearer ' + token })
    var url = environment.urlEmpleados + request;

    return this._http.get(url, { headers });
  }
}
