import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarViagemComponent } from './cadastrar-viagem.component';

describe('CadastrarViagemComponent', () => {
  let component: CadastrarViagemComponent;
  let fixture: ComponentFixture<CadastrarViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
