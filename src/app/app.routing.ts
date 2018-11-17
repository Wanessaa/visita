import{Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { ListarComponent } from './listar/listar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CadastrarViagemComponent } from './cadastrar-viagem/cadastrar-viagem.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes =[


{path:'VisualizacaoVisita/:id',component:VisualizacaoComponent},
{path:'cadastroUsuario',component:CadastrarComponent},
{path: 'cadastroViagem', component:CadastrarViagemComponent},
{path:'ListagensVisitas',component:ListarComponent},
{path:'login',component:LoginComponent},
{path:'oi',component:VisualizacaoComponent},
{path:'menu', component:MenuComponent},
{path:'',component:LoginComponent},
{path:'home',component:HomeComponent},
];

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);