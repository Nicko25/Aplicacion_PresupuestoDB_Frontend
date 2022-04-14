import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse } from '@angular/common/http';
import { Ingreso } from './ingreso.model';
import { Egreso } from './egreso.model';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {}

  urlBaseIngreso = 'http://localhost:8080/aplicacion-presupuesto-database-backend-javaEE/webservice/ingresos';
  urlBaseEgreso = 'http://localhost:8080/aplicacion-presupuesto-database-backend-javaEE/webservice/egresos';

  cargarIngresos(){
    return this.httpClient.get(this.urlBaseIngreso);
  }

  cargarEgresos(){
    return this.httpClient.get(this.urlBaseEgreso);
  }

  agregarIngreso(ingreso: Ingreso){
    return this.httpClient.post(this.urlBaseIngreso, ingreso);
  }

  agregarEgreso(egreso: Egreso){
    return this.httpClient.post(this.urlBaseEgreso, egreso);
  }

  modificarIngreso(idIngreso: number, ingreso: Ingreso){
    let url: string;
    url = this.urlBaseIngreso + '/' + idIngreso;
    this.httpClient.put(url, ingreso)
      .subscribe(
        (response) => {
          console.log('resultado modificar ingreso: ' + response);
        },
        (error) => console.log('Error en modificar ingreso:' + error)
      );
  }

  modificarEgreso(idEgreso: number, egreso: Egreso){
    let url: string;
    url = this.urlBaseEgreso + '/' + idEgreso;
    this.httpClient.put(url, egreso)
      .subscribe(
        (response) => {
          console.log('resultado modificar egreso: ' + response);
        },
        (error) => console.log('Error en modificar egreso:' + error)
      );
  }

  eliminarIngreso(idIngreso: number){
    let url: string;
    url = this.urlBaseIngreso + '/' + idIngreso;
    this.httpClient.delete(url)
    .subscribe(
      (response) => {
        console.log('resultado eliminar ingreso: ' + response);
      },
      (error) => console.log('Error en eliminar ingreso:' + error)
    );
  }

  eliminarEgreso(idEgreso: number){
    let url: string;
    url = this.urlBaseEgreso + '/' + idEgreso;
    this.httpClient.delete(url)
    .subscribe(
      (response) => {
        console.log('resultado eliminar egreso: ' + response);
      },
      (error) => console.log('Error en eliminar egreso:' + error)
    );
  }



}
