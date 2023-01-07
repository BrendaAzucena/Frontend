import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteM } from 'src/app/Modelos/cliente.model';
import { ClienteSerService } from '../../servicio/cliente-ser.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  cliente: ClienteM

  clientes = [];
  constructor( private  clienteServive: ClienteSerService, private router: Router) { }

  ngOnInit() {
  this.clienteServive.listar().subscribe(data =>{
      this.clientes = data;
    });
  }

  ionViewWillEnter(){
    this.clienteServive.listar().subscribe(data =>{
      this.clientes = data;
    });
  }


  agregar(){
    this.router.navigate(['/a']);
  }

eliminar (cliente, i) {
  this.clienteServive.eliminar(cliente.Id).subscribe(data => {
    console.log(data);
    this.clientes.splice(i,1); 
  }
  );
 }

  
}
