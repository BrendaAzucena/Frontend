import { Component, OnInit } from '@angular/core';
import { ProductoM } from '../../../../Modelos/producto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../../servicio/producto.service';

@Component({
  selector: 'app-pro-id',
  templateUrl: './pro-id.page.html',
  styleUrls: ['./pro-id.page.scss'],
})
export class ProIdPage implements OnInit {
  producto: ProductoM;

  constructor(private productoser: ProductoService, private router: Router,
    private activate: ActivatedRoute) { }

  ngOnInit() {
    this.activate.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('productoId');
      this.productoser.caragar(id).subscribe(data =>{
        this.producto = data
      });
    });
  }

}
