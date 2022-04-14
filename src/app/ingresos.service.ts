import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Ingreso } from "./ingreso.model";
import { DataService } from './data.service';


@Injectable()
export class IngresosService{

  ingresos : Ingreso[] = [];
  saludar = new EventEmitter<number>();

  constructor(private loggingService : LoggingService, private dataService : DataService){}

  setIngresos(ingresos: Ingreso[]){
    this.ingresos = ingresos;
  }

  obtenerIngresos(){
    return this.dataService.cargarIngresos();
  }

  agregarIngreso(ingreso: Ingreso){
    console.log('ingreso a agregar:' + ingreso.descripcion);
    this.dataService.agregarIngreso(ingreso)
      .subscribe(
        (ingreso: any) => {
          // Recuperamos objeto Ingreso con el idIngreso recien agregado
          console.log('se agrega al arreglo la ingreso recien insertada suscriber:' + ingreso.id);
          this.ingresos.push(ingreso);
        }
      );
  }

  eliminarIngreso(id: number) {
    console.log('eliminar ingreso con id:' + id);
    const index = this.ingresos.findIndex( ingreso => ingreso.id == id); //encontramos el indice en el arreglo
    this.ingresos.splice(index,1);
    this.dataService.eliminarIngreso(id);
  }

}
