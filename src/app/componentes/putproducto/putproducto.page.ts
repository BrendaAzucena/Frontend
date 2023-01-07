import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/servicio/producto.service';
import { ProductoM } from '../../Modelos/producto.model';
import { Observable } from 'rxjs';
import { ProveedorService } from '../../servicio/proveedor.service';
import { Proveedores } from 'src/app/Modelos/proveedores.interface';

@Component({
  selector: 'app-putproducto',
  templateUrl: './putproducto.page.html',
  styleUrls: ['./putproducto.page.scss'],
})
export class PutproductoPage implements OnInit {
  id: any;
  proveedor: any;
 
  proveedores : Proveedores [] = [];
  producto = new ProductoM('','','','','');
  constructor(private productoservice: ProductoService, private router: Router, private activate: ActivatedRoute, private proveedorservice: ProveedorService) { }

  ngOnInit() {
    this.activate.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('Id');
      this.productoservice.caragar(id).subscribe(data =>{
        this.producto = data;
      });
    });
    this.getNombres();
  }


  getNombres(){
    this.proveedorservice.listar().subscribe(arg => 
      this.proveedores = arg
      );
  }

  guardar(){
    let peticion:Observable<any>;
    this.producto.Id
    peticion = this.productoservice.editar(this.producto);
  
    peticion.subscribe(res => {
      this.producto.Id
  
      this.router.navigate(['/producto']);
    })
   }

}
