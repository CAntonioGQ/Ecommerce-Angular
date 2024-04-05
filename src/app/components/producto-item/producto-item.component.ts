import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit{

  @Input() producto: Producto | undefined
    
    ngOnInit(): void {
      console.log(this.producto)  
    }
  }

