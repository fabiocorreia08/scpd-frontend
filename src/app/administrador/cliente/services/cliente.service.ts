import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  readonly baseUrl : string;

  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:8080/clientes';
  }

  listar(){
    return this.http.get<Array<any>>(`${this.baseUrl}`);
  }

}
