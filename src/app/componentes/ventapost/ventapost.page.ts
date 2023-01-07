import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Facturas } from 'src/app/Modelos/factura.interface';
import { FacturaM } from 'src/app/Modelos/factura.model';
import { VentaM } from 'src/app/Modelos/venta.model';
import { VentaService } from 'src/app/servicio/venta.service';
import { FacturaService } from '../../servicio/factura.service';

@Component({
  selector: 'app-ventapost',
  templateUrl: './ventapost.page.html',
  styleUrls: ['./ventapost.page.scss'],
})
export class VentapostPage implements OnInit {
  Id: any;
  facturas: any;
  factura : FacturaM;
  fact : Facturas [] = [];
  venta = new VentaM("","","");
  
  constructor( private ventaService: VentaService, private router: Router, private facturaservice: FacturaService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('Id');
    this.getNombres();
  }

  getNombres(){
    this.facturaservice.listar()
    .subscribe(datos =>{
      console.log(datos);
      this.fact = datos;
    }
      )
  }
  agregarventa(Id, Cantidad, factura_id){
    const V: VentaM = {
      Id: Id.value,
      Cantidad: Cantidad.value,
      factura_Id: factura_id.value,
      
    }

    this.ventaService.agregar(V).subscribe( data=>{
      this.router.navigate([`/venta`])
    })

  }

  seleccionado(){
    console.log(" facturas -> ", this.venta.factura_Id);
   
  
    }

}