import { Component, OnInit } from '@angular/core';
import { ClienteSerService } from '../../servicio/cliente-ser.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteM } from '../../Modelos/cliente.model';
import { Cliente } from 'src/app/Modelos/cliente.interface';

@Component({
  selector: 'app-e',
  templateUrl: './e.page.html',
  styleUrls: ['./e.page.scss'],
})
export class EPage implements OnInit {

  cliente: ClienteM;

  constructor( private clientser: ClienteSerService, private router: Router,
    private activate: ActivatedRoute) { }

  ngOnInit() {
    this.activate.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('clienteId');
      this.clientser.cargar(id).subscribe(data =>{
        this.cliente = data;
      });
    });
  }
 

  editar(){
    this.router.navigate(['/putcliente']);
  }

          }
   
