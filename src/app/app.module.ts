import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { LoggingService } from './LoggingService.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { FormsModule } from '@angular/forms';
import { IngresosService } from './ingresos.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { EgresosService } from './egresos.service';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    FormularioComponent,
    Formulario2Component,
    PresupuestoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggingService, IngresosService, EgresosService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
