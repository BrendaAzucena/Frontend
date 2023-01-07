import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../servicio/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedoresM } from '../../Modelos/proveedores.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-putproveedor',
  templateUrl: './putproveedor.page.html',
  styleUrls: ['./putproveedor.page.scss'],
})
export class PutproveedorPage implements OnInit {

  id: any;
  proveedor = new ProveedoresM ('','','','');

  constructor( private proveedorservice:ProveedorService, private router: Router, private active: ActivatedRoute) { }

  ngOnInit() {
    this.active.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('Id');
      this.proveedorservice.caragar(id).subscribe(data =>{
        this.proveedor = data;
      });
    });
  }

  cambios(){
    let peticion:Observable<any>;
    this.proveedor.Id
    peticion = this.proveedorservice.editar(this.proveedor);
  
    peticion.subscribe(res => {
      this.proveedor.Id
  
      this.router.navigate(['/proveedor']);
    })
   }
   
  }
