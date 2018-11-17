import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';
import { USUARIOS } from './login/usuarios';

@Injectable({
  providedIn: 'root'
})
export class CadastrarService {
 
 
  constructor() { }
  CadastrarUsuario(nome,siape,senha,id){
        USUARIOS.push(new Usuario());
        console.log();
  }
            
      
}
        