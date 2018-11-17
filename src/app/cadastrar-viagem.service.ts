import { Injectable } from '@angular/core';
import { Viagem } from './cadastrar-viagem/ViagemConteudo';

@Injectable({
  providedIn: 'root'
  
})

export class CadastrarViagemService {
  viagens: Viagem[]  = [];

  constructor( ) { }
  
  setViagem(viagem){
      this.viagens.push(viagem);
      console.log("Cadastro realizado");
  }
   
}