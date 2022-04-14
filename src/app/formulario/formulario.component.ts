import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso.model';
import { IngresosService } from './../ingresos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  @Input()
  ingreso!: Ingreso;
  @Input()
  ingresos!: Ingreso[];
  @Input()
  egresoTotal!: number;

  constructor(private ingresosService: IngresosService) {}

  ngOnInit(): void {
  }

  eliminarRegistro(ingreso : Ingreso){
    this.ingresosService.eliminarIngreso(ingreso.id);
  }

  calcularPorcentaje(ingreso: Ingreso):number{
    return ingreso.valor/this.egresoTotal;
  }

}
