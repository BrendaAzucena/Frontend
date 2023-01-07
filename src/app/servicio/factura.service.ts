import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FacturaM } from '../Modelos/factura.model';
import { Facturas } from '../Modelos/factura.interface';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  path =`${environment.url}/facturas`;

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<any>(this.path);
  }

  caragar(id: string): Observable<any>{
    return this.http.get<any>(this.path+'/'+id);
  }

  agregar(factura: FacturaM):Observable<FacturaM>{
    return this.http.post<FacturaM>(`${this.path}/crear`,factura);
    }

  eliminar(id): Observable<FacturaM>{
      return this.http.delete<FacturaM>(`${this.path}/eliminar/${id}`);
    }

  editar(factura: FacturaM): Observable<FacturaM>{
      return this.http.put<FacturaM>(`${this.path}/editar/${factura.Id}`,factura);
      }
  
  cargarCliente (id){
        return this.http.get<[Facturas]>(`${this.path}/cliente/${id}`);
      }
      
  cargarClient(id: string): Observable<any>{
        return this.http.get<any>(`${this.path}/${id}`);
      }

  FactCliente (id: string): Observable<any>{
        return this.http.get<any>(`${this.path}/cliente/${id}`);
      }
    }
