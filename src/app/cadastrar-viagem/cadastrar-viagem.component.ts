import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrarViagemService } from '../cadastrar-viagem.service';
import { Viagem } from './ViagemConteudo';


@Component({
  selector: 'app-cadastrar-viagem',
  templateUrl: './cadastrar-viagem.component.html',
  styleUrls: ['./cadastrar-viagem.component.css']
})
export class CadastrarViagemComponent implements OnInit {
  empresa:string;
  cidade:string;
  roteiro:string;
  data:number;
  horario:number
  professor: string;
  curriculo:string;
  conteudo:string;
  carga:string;
  turma: string;
  hospedagem: string;
  endereco:string;
  servico:string;
  justificativas:string;
  objetivos:string;
  metodologia:string;
  formasAprendizagem:string;
  outrosServidores:string;
  
  cadastrarV(empresa,cidade,roteiro, data,horario,professor, 
    curriculo,conteudo,carga,turma,servico,justificativas,
    objetivos,metodologia, formasAprendizagem,outrosServidores){
                            
      let viagem = new Viagem();
      viagem.empresa = this.empresa;
      viagem.cidade=this.cidade;
      viagem.roteiro=this.roteiro;
      viagem.data=this.data;
      viagem.horario=this.horario;
      viagem.professor=this.professor;
      viagem.curriculo=curriculo;
      viagem.conteudo=this.conteudo;
      viagem.carga=this.carga;
      viagem.turma=this.turma;
      viagem.hospedagem=this.hospedagem;
      viagem.endereco=this.endereco;
      viagem.servico=this.servico;
      viagem.justificativas=this.justificativas;
      viagem.objetivos=this.objetivos;
      viagem.metodologia=this.metodologia;
      viagem.formasAprendizagem=this.formasAprendizagem;
      viagem.outrosServidores=this.outrosServidores;

      this.servicoService.setViagem(viagem);
      console.log("Cadastro realizado");

      }


 

  constructor(public router : Router,
    private servicoService: CadastrarViagemService
    ) { }
   

    ngOnInit() {
      this.cadastrarV(this.empresa,this.cidade,this.roteiro,this. data,
        this.horario,this.professor,this.curriculo,this.conteudo,
        this.carga,this.turma,
        this.servico,this.justificativas,this.objetivos,
        this.metodologia, this.formasAprendizagem,this.outrosServidores);
        
 
  }
  
}