import { Component, OnInit } from '@angular/core';
import { SolicitacaoService } from '../../solicitacao/services/solicitacao.service';
import { Solicitacao } from '../models/solicitacao.model';
import { ClienteService } from '../../cliente/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})
export class SolicitacaoComponent implements OnInit {

  solicitacoes: Array<any>; 
  solicitacao: Solicitacao = new Solicitacao();
  submitted = false;  

  constructor(private solicitacaoService: SolicitacaoService,
              private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit() {
    this.gotoList();
  } 
  
  criarSolicitacao(){    
    this.submitted = true;
    this.save();    
  }

  save() {
    this.clienteService.listar().subscribe(data => {             
        this.solicitacaoService.create(data).subscribe(s => {                
          this.solicitacao = new Solicitacao();
          this.gotoList();
        });      
    });    
  }

  removerSolicitacao(){    
    this.submitted = true;
    this.delete();    
  }

  delete() {
    this.solicitacaoService.delete()
      .subscribe(
        data => {
          console.log(data);
          this.gotoList();
        },
        error => console.log(error));
  }

  gotoList() {
    this.solicitacaoService.getList().subscribe(s => {
      this.solicitacoes = s;      
    });
  }

}
