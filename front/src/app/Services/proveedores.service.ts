import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProveedor } from '../Interface/iproveedor';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {  
 private urlBase:String = 'http://localhost/SEXTO/proyecto9/Inventario/Controllers/Proveedor.Controller.php?op='
  constructor(private cliente:HttpClient) {}

  todos():Observable<IProveedor[]>{
    return this.cliente.get<IProveedor[]>(this.urlBase + 'todos');
}
uno(id:number):Observable<IProveedor>{
   var proveedores = new FormData();

  return this.cliente.post<IProveedor>(this.urlBase + 'uno',proveedores);
}

insertar(proveedor:IProveedor):Observable<any>{
  var prov = new FormData();
  prov.append('nombre', proveedor.nombres);
  prov.append('telefono', proveedor.telefono);
  prov.append('direccion', proveedor.correo);
  return this.cliente.post(this.urlBase + 'insertar', prov);

}
actualizar(proveedor:IProveedor):Observable<any>{
  var prov = new FormData();
  prov.append('id', proveedor.proveedorId.toString());
  prov.append('nombre', proveedor.nombres);
  prov.append('telefono', proveedor.telefono);
  prov.append('direccion', proveedor.correo);
  return this.cliente.post(this.urlBase + 'actualizar', prov);
}
eliminar(id:number):Observable<any>{
  var prov = new FormData();
  prov.append('id', id.toString());
  return this.cliente.post(this.urlBase + 'eliminar', prov);
}












}
