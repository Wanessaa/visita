import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { routing } from './app.routing';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import{CardModule} from 'primeng/card';
import { ViagemTecnicaService } from './viagem-tecnica.service';
import {MenubarModule} from 'primeng/menubar';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import {MenuModule} from 'primeng/menu';


import { CadastrarViagemComponent } from './cadastrar-viagem/cadastrar-viagem.component';
import { AlterarComponent } from './alterar/alterar.component';
import { MenuComponent } from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    VisualizacaoComponent,
    LoginComponent,
    HomeComponent,
    CadastrarComponent,
    CadastrarViagemComponent,
    AlterarComponent,
    MenuComponent,
    

  ],
  imports: [
    
    BrowserModule,
    TableModule,
    CalendarModule,
    routing,
    CardModule,
    ButtonModule,
    MenubarModule,
    MenubarModule,
    FormsModule,
    MenuModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [ViagemTecnicaService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
