import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteM } from '../../Modelos/cliente.model';
import { ClienteSerService } from '../../servicio/cliente-ser.service';

@Component({
  selector: 'app-a',
  templateUrl: 'a.page.html',
  styleUrls: ['./a.page.scss'],
})
export class APage implements OnInit {

clientes: any;

  constructor( private clienteSerService: ClienteSerService, private router: Router) {

  }

  ngOnInit() {
  }

  agregarCliente(Id, Nombre, Apellidos, Telefono,Direccion){
    const C: ClienteM ={
      Id: Id.value,
      Nombre :  Nombre.value,
      Apellidos: Apellidos.value,
      Telefono: Telefono.value,
      Direccion : Direccion.value
    }
this.clienteSerService.agregar(C).subscribe( data =>{
this.router.navigate([`/cliente`])
});

  }


}
