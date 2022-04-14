import { Egreso } from './egreso.model';
import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresosService } from './ingresos.service';
import { EgresosService } from './egresos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ingresos : Ingreso[] = [];
  egresos : Egreso[] = [];

  constructor(private ingresosService: IngresosService, private egresosService: EgresosService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void{
    type NewType = Ingreso;
    type NewType2 = Egreso;

    this.ingresosService.obtenerIngresos()
      .subscribe(
        (ingresosObtenidos: any): void => {
          //cargamos los datos de ingreso obtenidos en el arreglo local
          this.ingresos = ingresosObtenidos;
          this.ingresosService.setIngresos(this.ingresos);
          console.log('ingresos obtenidas del subscriber:' + this.ingresos);
        }
      );

    this.egresosService.obtenerEgresos()
      .subscribe(
        (egresosObtenidos: any): void => {
          //cargamos los datos de egreso obtenidos en el arreglo local
          this.egresos = egresosObtenidos;
          this.egresosService.setEgresos(this.egresos);
          console.log('egresos obtenidas del subscriber:' + this.egresos);
        }
      );


  }

  totalIngresos():number{
    let ingresoTotal = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  totalEgresos():number{
    let egresoTotal = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

}
