import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductos } from '../Interface/iproductos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private urlBase: string =
    'http://localhost/SEXTO/proyecto9/Inventario/Controllers/Producto.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IProductos[]> {
    return this.cliente.get<IProductos[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IProductos> {
    var productos = new FormData();
    return this.cliente.post<IProductos>(this.urlBase + 'uno', productos);
  }
  insertar(producto: IProductos): Observable<any> {
    var prod = new FormData();
    prod.append('nombre', producto.nombre);
    prod.append('precio', producto.precio.toString());
    prod.append('stock', producto.cantidad.toString());
    return this.cliente.post(this.urlBase + 'insertar', prod);
  }
  actualizar(producto: IProductos): Observable<any> {
    var prod = new FormData();
    prod.append('id', producto.productId.toString());
    prod.append('nombre', producto.nombre);
    prod.append('precio', producto.precio.toString());
    prod.append('stock', producto.cantidad.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prod);
  }
}
