import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DetallesseriesComponent } from './components/detallesseries/detallesseries.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { appRoutingProvider, routing } from './app.routing';
import { SeriesService } from './services/series.service';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    PersonajesComponent,
    DetallesseriesComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProvider,
    SeriesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
