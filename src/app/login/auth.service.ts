import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import {USUARIOS}  from './usuarios';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private usuarioAutenticado:boolean=false;
 usuarios = USUARIOS;
 

 constructor(private router:Router) { }
  fazerLogin(usuario:Usuario){
    for (let i=0;i<USUARIOS.length;i++){
      //if(usuario.login== 'wanessa' && usuario.senha== "123"){
      if(usuario.nome== this.usuarios[i].nome && usuario.senha==this.usuarios[i].senha){
        this.usuarioAutenticado=true;
        this.router.navigate(['/ListagensVisitas'])
        console.log("autenticado");
        console.log(usuario.nome +" == "+ this.usuarios[i].nome);
       console.log(usuario.senha +" == "+ this.usuarios[i].senha);
      break;
        
      }

      else{
       this.usuarioAutenticado=false;
       console.log(usuario.nome +" == "+ this.usuarios[i].nome);
       console.log(usuario.senha +" == "+ this.usuarios[i].senha);
       console.log("nao autenticado");
      }

    }

  }
}
