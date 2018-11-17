import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrarService } from '../cadastrar.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
  

})
export class CadastrarComponent implements OnInit {
 
  Nome:string;
  Siape:number;
  Senha: number;  
  id: number;     

  cadastrar(Nome, Siape, Senha,id){
    if(this.Nome !=null){
      if(this.Siape!= null){
        if(this.Senha!=null){
          this.servicoService.CadastrarUsuario(this.Nome, this.Siape, this.Senha,this.id);
          this.router.navigate(["/login"]);
          
          
        }

      }

    }
}

  constructor(public router : Router,
              private servicoService: CadastrarService ) { }
 
  
  ngOnInit() {
    this.cadastrar(this.Nome, this.Siape, this.Senha,this.id);

  }

}
