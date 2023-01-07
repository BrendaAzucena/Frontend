import { Facturas } from '../../../../Modelos/factura.interface';
import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../../../servicio/factura.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fad-id',
  templateUrl: './fad-id.page.html',
  styleUrls: ['./fad-id.page.scss'],
})
export class FadIdPage implements OnInit {
  factura: Facturas;

  constructor(private facturaser: FacturaService, private router: Router, private activate: ActivatedRoute) { }

  ngOnInit() {
    this.activate.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('facturaId');
      this.facturaser.caragar(id).subscribe(data =>{
        this.factura = data;
      });
    });
  }

}
