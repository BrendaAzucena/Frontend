import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../servicio/venta.service';
import { Router } from '@angular/router';
import { VentaM } from 'src/app/Modelos/venta.model';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage implements OnInit {
  venta: VentaM
  Ventas = [];

  constructor(private ventaService: VentaService, private router: Router) { }

  ngOnInit() {
    this.ventaService.listar().subscribe(data => {
      this.Ventas = data
    });

  }

  ionViewWillEnter(){
    this.ventaService.listar().subscribe(data => {
      this.Ventas = data
    });
  }

  agregar(){
    this.router.navigate(['/ventapost']);
  }

eliminar (venta, i) {
  this.ventaService.eliminar(venta.Id).subscribe(data => {
    console.log(data);
    this.Ventas.splice(i,1);
  }
  );
}
}
 
