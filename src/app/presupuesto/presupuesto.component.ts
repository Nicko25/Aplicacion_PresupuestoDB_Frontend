import { Egreso } from '../egreso.model';
import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso.model';
import { IngresosService } from '../ingresos.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {

  @Input() ingresos : Ingreso[] = [];
  @Input() egresos : Egreso[] = [];

  constructor(ingresosService : IngresosService) { }

  ngOnInit(): void {
  }

  totalIngresos():number{
    let total = 0;
    this.ingresos.forEach(ingreso => {
      total += ingreso.valor;
    });
    return total;
  }

  totalEgresos():number{
    let total = 0;
    this.egresos.forEach(egreso => {
      total += egreso.valor;
    });
    return total;
  }

  porcentajeTotal():number{
    return this.totalIngresos() / this.totalEgresos()
  }

  porcentajeTotal2():number{
    return this.totalEgresos() / this.totalIngresos()
  }

  balancePresupuesto():number{
    return this.totalIngresos() - this.totalEgresos();
  }

}
