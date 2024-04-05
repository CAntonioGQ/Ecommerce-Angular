import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})

export class ProductoListComponent implements OnInit, OnDestroy{
  producto: Producto[] = []
  productoSub: Subscription | undefined

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.productoSub = this.productoService.getProducto()
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

  ngOnDestroy(): void {
    this.productoSub?.unsubscribe()
  }
}
