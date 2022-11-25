import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpregadoComponent } from './add-edit-empregado.component';

describe('AddEditEmpregadoComponent', () => {
  let component: AddEditEmpregadoComponent;
  let fixture: ComponentFixture<AddEditEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmpregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
