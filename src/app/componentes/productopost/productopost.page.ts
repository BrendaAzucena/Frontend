import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proveedores } from 'src/app/Modelos/proveedores.interface';
import { ProveedoresM } from 'src/app/Modelos/proveedores.model';
import { ProductoM } from '../../Modelos/producto.model';
import { ProductoService } from '../../servicio/producto.service';
import { ProveedorService } from 'src/app/servicio/proveedor.service';

@Component({
  selector: 'app-productopost',
  templateUrl: './productopost.page.html',
  styleUrls: ['./productopost.page.scss'],
})
export class ProductopostPage implements OnInit {
  Id: any;
  proveedor: any;
  prove : ProveedoresM;
  proveedores : Proveedores [] = [];
  producto = new ProductoM("","","","","");
  
  constructor(private productoService: ProductoService, private router: Router, private proveedorservice: ProveedorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.Id = this.route.snapshot.paramMap.get('Id');
    this.getNombres();
  }

  getNombres(){
    this.proveedorservice.listar()
    .subscribe(datos =>{
      console.log(datos);
      this.proveedores = datos;
    }
      )
  }

  agregarProducto(Id, Precio, Descripcion, Categoria, proveedores_Id){
    const P: ProductoM = {
      Id: Id.value,
      Precio: Precio.value,
      Descripcion: Descripcion.value,
      Categoria: Categoria.value,
      proveedores_Id: proveedores_Id.value
    }

    this.productoService.agregar(P).subscribe( data=>{
      this.router.navigate([`/producto`])
    })

    
}

seleccionado(){
  console.log("proveedores -> ", this.producto.proveedores_Id);
 

  }

}
