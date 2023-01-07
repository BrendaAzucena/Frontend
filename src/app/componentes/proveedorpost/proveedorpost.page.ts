import { ProveedoresM } from './../../Modelos/proveedores.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-proveedorpost',
  templateUrl: './proveedorpost.page.html',
  styleUrls: ['./proveedorpost.page.scss'],
})
export class ProveedorpostPage implements OnInit {


  constructor(private proveedorService: ProveedorService, private router: Router) { }

  ngOnInit() {
  }

  agregarProveedor(Id, Nombre, Apellidos, Telefono){
    const PR: ProveedoresM = {
      Id: Id.value,
      Nombre: Nombre.value,
      Apellidos: Apellidos.value,
      Telefono: Telefono.value
    }

    this.proveedorService.agregar(PR).subscribe( data=>{
      this.router.navigate([`/proveedor`])
    })

  }

}
