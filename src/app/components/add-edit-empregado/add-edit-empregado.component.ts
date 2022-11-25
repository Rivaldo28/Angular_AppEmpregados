import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empregado } from 'src/app/models/empregado';
import { EmpregadoService } from 'src/app/services/empregado.service';

@Component({
  selector: 'app-add-edit-empregado',
  templateUrl: './add-edit-empregado.component.html',
  styleUrls: ['./add-edit-empregado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class AddEditEmpregadoComponent implements OnInit {
  estadoCivils: any[] = ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)'];
  idEmpregado: any;
  acao = 'Adicionar';

  myForm: FormGroup;
  constructor(private fb: FormBuilder,
    private empregadoService: EmpregadoService,
    private route: Router,
    private snakBar: MatSnackBar,
    private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      nomeCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      fecharEntrada: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.maxLength(11)]],
      estadoCivil: ['', [Validators.required]],
      sexo: ['', [Validators.required]]
    });
    const idParam = 'id';
    this.idEmpregado = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if (this.idEmpregado !== undefined) {
      this.acao = 'Editar';
      this.esEditar();
    }
  }
  public salvarEmpregados() {
    console.log(this.myForm);
    const empregado: Empregado = {
      id: this.myForm.get('id')?.value,
      nomeCompleto: this.myForm.get('nomeCompleto')?.value,
      email: this.myForm.get('email')?.value,
      fecharEntrada: this.myForm.get('fecharEntrada')?.value,
      telefone: this.myForm.get('telefone')?.value,
      estadoCivil: this.myForm.get('estadoCivil')?.value,
      sexo: this.myForm.get('sexo')?.value
    };
    if (this.idEmpregado !== undefined) {
      this.editarEmpregado(empregado);
    } else {
      this.adicionarEmpregado(empregado);
    }
  }

  public adicionarEmpregado(empregado: Empregado) {
    this.empregadoService.adicionarEmpregados(empregado);
    this.snakBar.open('O empregado foi registrado com sucesso!', '', {
      duration: 3000
    });
    this.route.navigate(['/']);
  }

  public editarEmpregado(empregado: Empregado) {
    this.empregadoService.editEmpregado(empregado, this.idEmpregado);
    this.snakBar.open('O empregaoo foi atualizado com sucesso!', '', {
      duration: 3000
    });
    this.route.navigate(['/']);
  }

  public esEditar() {
    const empregado: Empregado = this.empregadoService.getEmpregado(this.idEmpregado);
    console.log(empregado);
    this.myForm.patchValue({
      nomeCompleto: empregado.nomeCompleto,
      email: empregado.email,
      fecharEntrada: empregado.fecharEntrada,
      telefone: empregado.telefone,
      estadoCivil: empregado.estadoCivil,
      sexo: empregado.sexo,
    });
  }

}
