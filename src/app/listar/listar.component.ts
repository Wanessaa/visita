import { Component, OnInit } from '@angular/core';
import { ViagemTecnica } from '../viagemTecnica';
import { ViagemTecnicaService } from '../viagem-tecnica.service';




@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  viagensTecnicas: ViagemTecnica[];
  
  constructor(private viagemService: ViagemTecnicaService) { }
  ngOnInit() {
    this.excluirViagem(this.viagensTecnicas);
  }

  geViagemTecnica(id){
    this.viagensTecnicas = this.viagemService.getViagensDeUsuario(id);
  }

  
  excluirViagem(id){
    this.viagemService.deletarViagemId(id);
    this.geViagemTecnica(id);
    
    //console.log(id);
  }

  

  //alterarViagem(viagemTecnica){
   // this.viagemService.setViagemTecnica(viagemTecnica);
 // }

}

