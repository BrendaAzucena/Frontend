import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicio/factura.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FacturaM } from '../../Modelos/factura.model';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Modelos/cliente.interface';
import { ClienteSerService } from '../../servicio/cliente-ser.service';

@Component({
  selector: 'app-putfactura',
  templateUrl: './putfactura.page.html',
  styleUrls: ['./putfactura.page.scss'],
})
export class PutfacturaPage implements OnInit {
  id: any;
  cliente: any;
 
  clientes : Cliente [] = [];
  factura = new FacturaM('','','','','');
  constructor(private facturaservice:FacturaService, private router: Router, private active: ActivatedRoute, public clienteserservice: ClienteSerService) { }

  ngOnInit() {
    this.active.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('Id');
      this.facturaservice.cargarClient(id).subscribe(data =>{
        this.factura = data;
      });
    });
    this.getNombres();
  }

  getNombres(){
    this.clienteserservice.listar().subscribe(arg => 
      this.clientes = arg
      );
    
  }

  cambios(){
    let peticion:Observable<any>;
    this.factura.Id
    peticion = this.facturaservice.editar(this.factura);
  
    peticion.subscribe(res => {
      this.factura.Id
  
      this.router.navigate(['/factura']);
    })
   }

}
