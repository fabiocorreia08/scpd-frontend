import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/api/v1/solicitacoes';
  }

  getList(): Observable<any>{    
    return this.http.get(`${this.baseUrl}`);
  }  

  create(clientes: Array<any>): Observable<Object> {
    return this.http.post<Array<any>>(`${this.baseUrl}`, clientes);
  }

  delete(): Observable<any> {
    return this.http.delete(`${this.baseUrl}`);
  }
  
}
