import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})

export class ProductoListComponent implements OnInit{
  producto: Producto[] = []

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.productoService.getProducto()
      .subscribe( {
        next: ( producto: Producto[] ) => {
          this.producto = producto
          console.log(this.producto)
        },
        error: ( error: any ) => {
          console.error(error)
        },
        complete:()=>{
          console.log('Completado')
        }
       })
  }
}
