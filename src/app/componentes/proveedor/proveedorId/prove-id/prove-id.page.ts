import { Component, OnInit } from '@angular/core';
import {  ProveedoresM } from '../../../../Modelos/proveedores.model';
import { ProveedorService } from '../../../../servicio/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prove-id',
  templateUrl: './prove-id.page.html',
  styleUrls: ['./prove-id.page.scss'],
})
export class ProveIdPage implements OnInit {
  proveedor: ProveedoresM;

  constructor(private proveedorser: ProveedorService, private router: Router,
    private activate: ActivatedRoute) { }

  ngOnInit() {
    this.activate.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('proveedorId');
      this.proveedorser.caragar(id).subscribe(data =>{
        this.proveedor = data;
      });
    });
  }

}
