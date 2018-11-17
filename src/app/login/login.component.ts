import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { CadastrarService } from '../cadastrar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario:Usuario = new Usuario();

  constructor(private authService:AuthService, private cadastroService:CadastrarService) { }

  ngOnInit() {

  }

  fazerLogin(){
    
    this.authService.fazerLogin(this.usuario)
    //console.log(this.usuario);

  }

}
