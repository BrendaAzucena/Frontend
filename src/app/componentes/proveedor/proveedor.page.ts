import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../servicio/proveedor.service';
import { Router } from '@angular/router';
import { ProveedoresM } from '../../Modelos/proveedores.model';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit {
  proveedor: ProveedoresM
 proveedores = [];

  constructor( private proveservice: ProveedorService, private router: Router) { }

  ngOnInit() {
    this.proveservice.listar().subscribe(data =>{
      this.proveedores = data;
    });
  }
  ionViewWillEnter(){
    this.proveservice.listar().subscribe(data =>{
      this.proveedores = data;
    });
  }
  agregar(){
    this.router.navigate(['/proveedorpost']);
  }

  eliminar (proveedor, i) {
    this.proveservice.eliminar(proveedor.Id).subscribe(data => {
      console.log(data);
      this.proveedores.splice(i,1);
    }
    );
   }
  }
 
