import { Injectable } from '@angular/core';
import { Empregado } from '../models/empregado';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {
  public listaEmpregado: Empregado[] = [

    {
      id: 1,
      nomeCompleto: 'Rivaldo Souza',
      email: 'rivaldo.souza@outlook.com',
      telefone: 35159355,
      sexo: 'Masculino',
      fecharEntrada: new Date('2021-05-25'),
      estadoCivil: 'Casado(a)'
    },
    {
      id: 2,
      nomeCompleto: 'Emanuella',
      email: 'manu.souza@outlook.com',
      telefone: 35159355,
      sexo: 'Feminino',
      fecharEntrada: new Date('2013-12-08'),
      estadoCivil: 'Solteiro(a)'
    },
    {
      id: 3,
      nomeCompleto: 'Gabriella Souza',
      email: 'gabi.souza@outlook.com',
      telefone: 35159355,
      sexo: 'Feminino',
      fecharEntrada: new Date('2020-06-24'),
      estadoCivil: 'Solteiro(a)'
    },
    {
      id: 4,
      nomeCompleto: 'Adriana Souza',
      email: 'adrianan.souza@outlook.com',
      telefone: 35159355,
      sexo: 'Feminino',
      fecharEntrada: new Date('2018-01-13'),
      estadoCivil: 'Casado(a)'
    },
    {
      id: 5,
      nomeCompleto: 'Maria do Carmo Souza',
      email: 'maria.souza@outlook.com',
      telefone: 35159355,
      sexo: 'Feminino',
      fecharEntrada: new Date('2020-07-05'),
      estadoCivil: 'Casado(a)'
    },
    {
      id: 6,
      nomeCompleto: 'Francisco Souza',
      email: 'francisco.souza@outlook.com',
      telefone: 35159355,
      sexo: 'Masculino',
      fecharEntrada: new Date('2019-08-21'),
      estadoCivil: 'Casado(a)'
    }
  ]

  constructor() { }

  getEmpregados() {
    return this.listaEmpregado.slice();
  }
  deletarEmpregado(index: number) {
    this.listaEmpregado.splice(index, 1);
  }
  adicionarEmpregados(empregado: Empregado) {
    this.listaEmpregado.unshift(empregado);
  }
  getEmpregado(index: number) {
    return this.listaEmpregado[index];
  }
  editEmpregado(empregado: Empregado, idEmpregado: number) {
    this.listaEmpregado[idEmpregado].nomeCompleto = empregado.nomeCompleto;
    this.listaEmpregado[idEmpregado].fecharEntrada = empregado.fecharEntrada;
    this.listaEmpregado[idEmpregado].email = empregado.email;
    this.listaEmpregado[idEmpregado].telefone = empregado.telefone;
    this.listaEmpregado[idEmpregado].sexo = empregado.sexo;
    this.listaEmpregado[idEmpregado].estadoCivil = empregado.estadoCivil;
  }
}
