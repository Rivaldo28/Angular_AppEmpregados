import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmpregadoComponent } from './list-empregado.component';

describe('ListEmpregadoComponent', () => {
  let component: ListEmpregadoComponent;
  let fixture: ComponentFixture<ListEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmpregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
