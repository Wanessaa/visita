import { Injectable } from '@angular/core';
import { USUARIOS} from './login/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario = USUARIOS;

  getUsuario(){
    return this.usuario;
  }
 

  getUsuarioporId(id){
    for (let i =0; i<this.usuario.length; i++){
      if ( this.usuario[i].id == id){
        return this.usuario[i];
        
        
    
      }
    }
  }

  remover(id){
    for(let i = 0; i < this.usuario.length; i++){
      if(this.usuario[i].id== id){
        this.usuario.splice(i, 1);
        console.log("Usuario removido")
      }

    }
  }
}




  

  
 
