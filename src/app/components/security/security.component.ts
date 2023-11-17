import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Empleeados } from 'src/app/models/Empleados';
import { Users } from 'src/app/models/Users';
import { EmpleadosService } from 'src/app/services/empleados.service';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  public empleados!: Array<Empleeados>;
  @ViewChild('userName') userName!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  constructor(private _srvice: EmpleadosService, private router: Router) {

  }

  ngOnInit(): void {

  }


  login(): void {
    var usuario = new Users(this.userName.nativeElement.value, this.password.nativeElement.value)
    console.log(usuario);

    this._srvice.loginEmpleados(usuario).subscribe(response => {
      console.log(response);
      if (response) {
        this._srvice.authEmpleado(response).subscribe(result => {
          this.empleados = result;
          console.log(result.data);

        })
      }else{
        console.log("Usuario o contraseña incorrectos");
        
      }
    })
  }

}
