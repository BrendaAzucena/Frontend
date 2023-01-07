import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedoresM } from '../Modelos/proveedores.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  path = `${environment.url}/proveedores`;

  constructor( private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<any>(this.path);
  }

  agregar(proveedores: ProveedoresM): Observable<ProveedoresM>{
    return this.http.post<ProveedoresM>(`${this.path}/crear`, proveedores)
  }

  eliminar(id): Observable<ProveedoresM>{
    return this.http.delete<ProveedoresM>(`${this.path}/eliminar/${id}`);
  }

  editar(proveedor :ProveedoresM):Observable<ProveedoresM>{
    return this.http.put<ProveedoresM>(`${this.path}/editar/${proveedor.Id}`, proveedor);
  }

  caragar(id: string): Observable<any>{
    return this.http.get<any>(this.path+`/`+id);
  }
}
