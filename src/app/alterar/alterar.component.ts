import { Component, OnInit } from '@angular/core';
import { Viagem } from '../cadastrar-viagem/ViagemConteudo';
import {Router} from '@angular/router';
@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']

})


export class AlterarComponent implements OnInit {
  alterar: Viagem[] = [];
  empresa: string;
  cidade: string;
  roteiro: string;
  data: number;
  horario: number;
  professor: string;
  curriculo: string;
  conteudo: string;
  carga: string;
  turma: string;
  hospedagem: string;
  endereco: string;
  servico: string;
  justificativas: string;
  objetivos: string;
  metodologia: string;
  formasAprendizagem: string;
  outrosServidores: string;
  constructor() { }
  alterarV(id) {
    for (let i = 0; i < this.alterar.length; i++) {
      if (this.alterar[i].id == id) {
        if (this.alterar[i].empresa != this.empresa) {
          this.alterar[i].empresa = this.empresa;
        }
        if (this.alterar[i].cidade != this.cidade) {
          this.alterar[i].cidade = this.cidade;
        }
        if (this.alterar[i].roteiro != this.roteiro) {
          this.alterar[i].roteiro = this.roteiro;
        }
        if (this.alterar[i].data != this.data) {
          this.alterar[i].data = this.data;
        }
        if (this.alterar[i].horario != this.horario) {
          this.alterar[i].horario = this.horario;
        }
        if (this.alterar[i].professor != this.professor) {
          this.alterar[i].professor = this.professor;
        }
        if (this.alterar[i].curriculo != this.curriculo) {
          this.alterar[i].curriculo = this.curriculo;
        }
        if (this.alterar[i].conteudo != this.conteudo) {
          this.alterar[i].conteudo = this.conteudo;
        }
        if (this.alterar[i].carga != this.carga) {
          this.alterar[i].carga = this.carga;
        }
        if (this.alterar[i].turma != this.turma) {
          this.alterar[i].turma = this.turma;
        }
        if (this.alterar[i].hospedagem != this.hospedagem) {
          this.alterar[i].hospedagem = this.hospedagem;
        }
        if (this.alterar[i].endereco != this.endereco) {
          this.alterar[i].endereco = this.endereco;
        }
        if (this.alterar[i].servico != this.servico) {
          this.alterar[i].servico = this.servico;
        }
        if (this.alterar[i].justificativas != this.justificativas) {
          this.alterar[i].justificativas = this.justificativas;
        }
        if (this.alterar[i].objetivos != this.objetivos) {
          this.alterar[i].objetivos = this.objetivos;
        }
        if (this.alterar[i].metodologia != this.metodologia) {
          this.alterar[i].metodologia = this.metodologia;
        }
        if (this.alterar[i].formasAprendizagem != this.formasAprendizagem) {
          this.alterar[i].formasAprendizagem = this.formasAprendizagem;
        }
        if (this.alterar[i].outrosServidores != this.outrosServidores) {
          this.alterar[i].outrosServidores = this.outrosServidores;
        }
        console.log("Cadastro realizado");
      
    }
  }
}
  ngOnInit() {
  }


   
  }
