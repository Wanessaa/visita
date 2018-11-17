import { Injectable } from '@angular/core';
import { VIAGENSTECNICAS} from './viagensTecnicas';

@Injectable({
  providedIn: 'root'
})
export class ViagemTecnicaService {
  viagemTecnica = VIAGENSTECNICAS;
  

  getViagemTecnica(){
    return this.viagemTecnica;
  }

  getViagemId(id){
    for(let i=0;i<this.viagemTecnica.length;i++){
      if(this.viagemTecnica[i].id == id){
        return this.viagemTecnica[i];
      }
    }
  
  }

  getViagensDeUsuario(idUsuario){
   let viagensUsuario=[];
   
    for(let i=0;i<this.viagemTecnica.length;i++){
      if(this.viagemTecnica[i].idUsuario==idUsuario){
        viagensUsuario.push(this.viagemTecnica[i])
      }
    }
    return viagensUsuario;
  }

  deletarViagemId(id){
    for(let i=0;i<this.viagemTecnica.length;i++){
      if(this.viagemTecnica[i].id == id){
        this.viagemTecnica.splice(i,1);
        console.log("usuario removido");
        
      }
    }
    
  }




} 


