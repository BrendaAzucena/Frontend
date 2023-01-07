import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../servicio/factura.service';
import { Router } from '@angular/router';
import { FacturaM } from 'src/app/Modelos/factura.model';
import { ClienteSerService } from 'src/app/servicio/cliente-ser.service';
import { Cliente } from 'src/app/Modelos/cliente.interface';
import { Facturas } from '../../Modelos/factura.interface';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {
  facturas: FacturaM
  factura: Facturas [] = [];
  Clientes: Cliente;
  clientes: Cliente [] = [];

  constructor(private facturaservice: FacturaService, private router: Router,
    private clienteserservice: ClienteSerService) { }

  ngOnInit() {
    this.facturaservice.listar().subscribe(data =>{
      this.factura = data
      
    });

  }
  ionViewWillEnter(){
    this.facturaservice.listar().subscribe(data =>{
      this.factura = data
    });
  }

  getNombres(){
    this.clienteserservice.listar().subscribe(arg => 
      this.clientes = arg
     
      );
      console.log(this.clientes)
    
  }
  agregar(){
    this.router.navigate(['/facturapost']);
  }

eliminar (facturas, i) {
this.facturaservice.eliminar(facturas.Id).subscribe(resp => {
console.log(resp);
this.factura.splice(i,1);
  }
   );
}

}
