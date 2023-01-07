import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelos/cliente.interface';
import { FacturaM } from 'src/app/Modelos/factura.model';
import { ClienteSerService } from 'src/app/servicio/cliente-ser.service';
import { FacturaService } from '../../servicio/factura.service';

@Component({
  selector: 'app-facturapost',
  templateUrl: './facturapost.page.html',
  styleUrls: ['./facturapost.page.scss'],
})
export class FacturapostPage implements OnInit {
  Id: any;
  cliente: any;
 
  clientes : Cliente [] = [];
  factura = new FacturaM("","","","","");

  constructor(private  facturaService: FacturaService, private router: Router, public clienteserservice: ClienteSerService) { }

  ngOnInit() {
    this.getNombres();

  }

  agregarFactura(Id, Fecha, Descuento, Cantidad, cliente_Id){
    const F: FacturaM = {
      Id: Id.value,
      Fecha: Fecha.value,
      Descuento: Descuento.value,
      Cantidad: Cantidad.value,
      cliente_Id: cliente_Id.value
     
    }

    this.facturaService.agregar(F).subscribe( data=>{
      this.router.navigate([`/factura`])
    })

  }

  getNombres(){
    this.clienteserservice.listar().subscribe(arg => 
      this.clientes = arg
     
      );
      console.log(this.clientes)

}

seleccion(){
  console.log( "cliente ->", this.factura.cliente_Id);
}
}
