import { EgresosService } from './../egresos.service';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso.model';
import { Egreso } from '../egreso.model';
import { IngresosService } from '../ingresos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  tipo:string="IngresoOp"

  descripcionInput! : string;
  valorInput! : number;
  idInput! : number;

  constructor(private ingresosService : IngresosService, private egresosService :  EgresosService){
  }

  ngOnInit(): void {
  }

  tipoOperacion(evento:any){
    this.tipo = evento.target.value;

  }

  public agregarValor(){
  console.log(this.tipo)
   if(this.tipo === "IngresoOp"){
    let ingreso1 = new Ingreso(this.idInput, this.descripcionInput, this.valorInput);
    if(ingreso1.descripcion != undefined && ingreso1.valor != undefined)
      console.log('se agrega al arreglo la egreso recien insertada suscriber:' + ingreso1.id);
      this.ingresosService.agregarIngreso(ingreso1);
   }

   if(this.tipo === "EgresoOp"){
    let egreso1 = new Egreso(this.idInput, this.descripcionInput, this.valorInput);
    if(egreso1.descripcion != undefined && egreso1.valor != undefined)
      this.egresosService.agregarEgreso(egreso1);
   }

  }

}
