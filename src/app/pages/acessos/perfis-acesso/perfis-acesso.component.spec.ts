import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfisAcessoComponent } from './perfis-acesso.component';

describe('PerfisAcessoComponent', () => {
  let component: PerfisAcessoComponent;
  let fixture: ComponentFixture<PerfisAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfisAcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfisAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
