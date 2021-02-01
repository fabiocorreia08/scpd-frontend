import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/administrador/cliente/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Array<any>;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes(){
    this.clienteService.listar().subscribe(c => {
      this.clientes = c;      
    });
  }

}
