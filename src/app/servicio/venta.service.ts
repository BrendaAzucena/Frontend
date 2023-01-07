import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VentaM } from '../Modelos/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  path = `${environment.url}/ventas`;

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<any>(this.path);
  }

  agregar(venta: VentaM): Observable<VentaM>{
    return this.http.post<VentaM>(`${this.path}/crear`, venta)
  }

  eliminar(id): Observable<VentaM>{
    return this.http.delete<VentaM>(`${this.path}/eliminar/${id}`);
  }

  editar(venta: VentaM): Observable<VentaM>{
    return this.http.put<VentaM>(`${this.path}/editar/${venta.Id}`, venta)
  }

  caragar(id: string): Observable<any>{
    return this.http.get<any>(this.path+'/'+id);  
  }
}
