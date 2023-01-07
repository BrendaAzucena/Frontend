import { Component, OnInit } from '@angular/core';
import { VentaService } from 'src/app/servicio/venta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VentaM } from '../../Modelos/venta.model';
import { Observable } from 'rxjs';
import { Facturas } from '../../Modelos/factura.interface';
import { FacturaService } from '../../servicio/factura.service';

@Component({
  selector: 'app-putventa',
  templateUrl: './putventa.page.html',
  styleUrls: ['./putventa.page.scss'],
})
export class PutventaPage implements OnInit {
  id: any;
  factura: any;
  facturas : Facturas [] = [];
  venta = new VentaM('','','');

  constructor( private ventaservice:VentaService, private router: Router, private active: ActivatedRoute,
    private facturaservice:FacturaService) { }

  ngOnInit() {
    this.active.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('Id');
      this.ventaservice.caragar(id).subscribe(data =>{
        this.venta = data;
      });
    });
    this.getNombres();
  }

  getNombres(){
    this.facturaservice.listar().subscribe(arg => 
      this.facturas = arg
     
      );
    
  }

  cambios(){
    let peticion:Observable<any>;
    this.venta.Id
    peticion = this.ventaservice.editar(this.venta);
  
    peticion.subscribe(res => {
      this.venta.Id
  
      this.router.navigate(['/venta']);
    })
   }


}
