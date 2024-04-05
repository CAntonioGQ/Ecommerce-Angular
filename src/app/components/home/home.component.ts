import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  producto: any

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.productoService.getProducto()
      .subscribe( {
        next: ( producto: any ) => {
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
