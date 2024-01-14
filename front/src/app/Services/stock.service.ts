import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../Interface/istock';





@Injectable({
  providedIn: 'root'
})
export class StockService {
  private urlBase: String = 'http://localhost/SEXTO/proyecto9/Inventario/Controllers/Stock.Controller.php?op='
  constructor(private cliente: HttpClient) { }

  todos(): Observable<Stock[]> {
    return this.cliente.get<Stock[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<Stock> {
    var sotcks = new FormData();

    return this.cliente.post<Stock>(this.urlBase + 'uno', sotcks);
  }

  insertar(proveedor: Stock): Observable<any> {
    var prov = new FormData();
    prov.append("ProductoId", proveedor.productoId.toString());
    prov.append("ProveedorId", proveedor.proveedorId.toString());
    prov.append("Cantidad", proveedor.precio_Venta.toString());
    prov.append("Precio_Venta", proveedor.cantidad.toString());

    return this.cliente.post(this.urlBase + 'insertar', prov);

  }
  actualizar(proveedor: Stock): Observable<any> {
    var prov = new FormData();
    prov.append('id', proveedor.stockId.toString());
    prov.append("ProductoId", proveedor.productoId.toString());
    prov.append("ProveedorId", proveedor.proveedorId.toString());
    prov.append("Cantidad", proveedor.precio_Venta.toString());
    prov.append("Precio_Venta", proveedor.cantidad.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prov);
  }









}