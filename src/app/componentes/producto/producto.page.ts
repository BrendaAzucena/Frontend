import { ProductoService } from './../../servicio/producto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

Productos =[];

  constructor(private productoservice: ProductoService, private router: Router) { }

  ngOnInit() {
  this.productoservice.listar().subscribe(data => {
    this.Productos = data
   } );
    }

  ionViewWillEnter(){
    this.productoservice.listar().subscribe(data => {
      this.Productos = data
  });
}

  agregar(){
    this.router.navigate(['/productopost']);
  }

  eliminar (productos, i) {
  this.productoservice.eliminar(productos.Id).subscribe(data => {
  console.log(data);
  this.Productos.splice(i,1);
      }
     );  
              }
    

}
