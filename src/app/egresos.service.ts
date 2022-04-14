import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Egreso } from "./egreso.model";
import { DataService } from "./data.service";

@Injectable()
export class EgresosService{
  egresos : Egreso[] = [];
  saludar = new EventEmitter<number>();

  constructor(private loggingService : LoggingService, private dataService : DataService){}

  setEgresos(egresos: Egreso[]){
    this.egresos = egresos;
  }

  obtenerEgresos(){
    return this.dataService.cargarEgresos();
  }

  agregarEgreso(egreso: Egreso){
    console.log('egreso a agregar:' + egreso.descripcion);
    this.dataService.agregarEgreso(egreso)
      .subscribe(
        (egreso: any) => {
          // Recuperamos objeto Egreso con el idEgreso recien agregado
          console.log('se agrega al arreglo la egreso recien insertada suscriber:' + egreso.id);
          this.egresos.push(egreso);
        }
      );
  }

  eliminarEgreso(id: number) {
    console.log('eliminar egreso con id:' + id);
    const index = this.egresos.findIndex( egreso => egreso.id == id); //encontramos el indice en el arreglo
    this.egresos.splice(index,1);
    this.dataService.eliminarEgreso(id);
  }

}
