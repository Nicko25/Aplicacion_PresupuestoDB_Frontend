import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from '../egreso.model';
import { EgresosService } from './../egresos.service';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit{

  @Input()
  egreso!: Egreso;
  @Input()
  egresos!: Egreso[];
  @Input()
  ingresoTotal!: number;

  constructor(private egresosService: EgresosService) {}

  ngOnInit(): void {
  }

  eliminarRegistro(egreso : Egreso){
    this.egresosService.eliminarEgreso(egreso.id);
  }

  calcularPorcentaje(egreso: Egreso):number{
    return egreso.valor/this.ingresoTotal;
  }


}
