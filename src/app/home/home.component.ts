import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  constructor(private router:Router) { }

  ngOnInit() {

    this.items = [{label: 'VISITEC'+ "'"+"S"}]
  }

  mudarTelaLogin(){
    this.router.navigate(['/'])
    
  }
}



