import { Component, OnInit } from '@angular/core';
import { VentaM } from '../../../../Modelos/venta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { VentaService } from '../../../../servicio/venta.service';

@Component({
  selector: 'app-vent-id',
  templateUrl: './vent-id.page.html',
  styleUrls: ['./vent-id.page.scss'],
})
export class VentIdPage implements OnInit {
  venta: VentaM;

  constructor(private ventaser: VentaService, private router: Router,
    private activate: ActivatedRoute) { }

  ngOnInit() {
    this.activate.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('ventaId');
      this.ventaser.caragar(id).subscribe(data =>{
        this.venta = data
      });
    });
  }

}
