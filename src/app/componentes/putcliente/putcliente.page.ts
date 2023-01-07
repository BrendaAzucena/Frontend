import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ClienteM } from 'src/app/Modelos/cliente.model';
import { ClienteSerService } from 'src/app/servicio/cliente-ser.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-putcliente',
  templateUrl: './putcliente.page.html',
  styleUrls: ['./putcliente.page.scss'],
})
export class PutclientePage implements OnInit {
  cliente =  new ClienteM ('','','','','');
  id: any;

  constructor(private clientser: ClienteSerService, private router: Router, private activate: ActivatedRoute) { }

  ngOnInit(){ 
    this.activate.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('Id');
      this.clientser.cargar(id).subscribe(data =>{
        this.cliente = data;
      });
    });
  }


 guardar(){
  let peticion:Observable<any>;
  this.cliente.Id
  peticion = this.clientser.editar(this.cliente);

  peticion.subscribe(res => {
    this.cliente.Id

    this.router.navigate(['/cliente']);
  })
 }
 
}
