import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { EditarseriesComponent } from "./components/editarseries/editarseries.component";
import { DetallesseriesComponent } from "./components/detallesseries/detallesseries.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { CreateseriesComponent } from "./components/createseries/createseries.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent }, //No llevan barra    
    { path: 'insertar', component: CreateseriesComponent },
    { path: 'editar', component: EditarseriesComponent },
    { path: 'detalleserie/:id', component: DetallesseriesComponent },
    { path: 'personajes/:idserie', component: PersonajesComponent },
    //{ path: 'editar/:id/:nombre/:localidad', component: EditarseriesComponent },

    

];
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
