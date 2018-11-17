import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViagemTecnica } from '../viagemTecnica';
import { ViagemTecnicaService } from '../viagem-tecnica.service';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit,OnDestroy {

  viagensTecnicas: ViagemTecnica[] = []
  id: number;
  private sub: any;

  

  constructor(private route: ActivatedRoute,
    private viagemS:ViagemTecnicaService) {}

  ngOnInit() {


    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
        console.log(this.id)

       // In a real app: dispatch action to load the details here.
    });
    
    this.viagensTecnicas
    .push(this.viagemS.getViagemId(this.id))
    }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}