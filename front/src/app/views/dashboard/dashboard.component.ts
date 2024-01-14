import { StockService } from '../../Services/stock.service';
import { Stock } from '../../Interface/istock';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../Services/productos.service';
import { ProveedoresService } from '../../Services/proveedores.service';
import { IProductos } from 'src/app/Interface/iproductos';
import { IProveedor } from 'src/app/Interface/iproveedor';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  productos: IProductos[];
  proveedores: IProveedor[];
  stock: Stock[];
  constructor(
    private productosServicio: ProductosService, private proveedorServicio: ProveedoresService, private stockServicio: StockService
  ) { }
  ngOnInit(): void {
    this.cargalista();
    this.cargalistaProveedor();
    this.cargalistaStock();
  }
  private cargalista() {
    this.productosServicio.todos().subscribe((data) => {
      console.log(data);
      this.productos = data;
    });
  }
  private cargalistaProveedor() {
    this.proveedorServicio.todos().subscribe((data) => {
      console.log(data);
      this.proveedores = data;
    });
  }
  private cargalistaStock() {
    this.stockServicio.todos().subscribe((data) => {
      console.log(data);
      this.stock = data;
    });
  }


}