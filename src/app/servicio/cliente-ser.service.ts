import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  ClienteM } from '../Modelos/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteSerService {

  path =`${environment.url}/clientes`;

  constructor( private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<any>(this.path);
  }

cargar(id: string): Observable<any>{
  return this.http.get<any>(this.path+'/'+id);
}

agregar(cliente: ClienteM):Observable<ClienteM>{
return this.http.post<ClienteM>(`${this.path}/crear`,cliente);
}

eliminar(id): Observable<ClienteM>{
  return this.http.delete<ClienteM>(`${this.path}/eliminar/${id}`);
}

editar (cliente: ClienteM): Observable<ClienteM>{
  return this.http.put<ClienteM>(`${this.path}/editar/${cliente.Id}`,cliente)
}

FactCliente (id:string): Observable<any>{
  return this.http.get<any>(`${this.path}/cliente/${id}`);
}

}

