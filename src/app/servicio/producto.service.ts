import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductoM } from '../Modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  path = `${environment.url}/productos`;

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<any>(this.path);
  }

  caragar(id: string): Observable<any>{
    return this.http.get<any>(this.path+'/'+id);
  }

  agregar(producto: ProductoM): Observable<ProductoM>{
    return this.http.post<ProductoM>(`${this.path}/crear`, producto)
  }

  eliminar(id): Observable<ProductoM>{
    return this.http.delete<ProductoM>(`${this.path}/eliminar/${id}`);
  }

  editar(producto: ProductoM):Observable<ProductoM>{
    return this.http.put<ProductoM>(`${this.path}/editar/${producto.Id}`, producto)
  }

  PRO (id:string) :Observable<any>{
    return this.http.get(`${this.path}/proveedores/${id}`);
  }

}
