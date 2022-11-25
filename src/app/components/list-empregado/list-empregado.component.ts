import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpregadoService } from 'src/app/services/empregado.service';
import { Empregado } from 'src/app/models/empregado';
import { MatDialog } from '@angular/material/dialog';
import { MensagemConfirmacaoComponent } from '../shared/mensagem-confirmacao/mensagem-confirmacao.component';
import { MatSnackBar } from '@angular/material/snack-bar';

/* export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
]; */

@Component({
  selector: 'app-list-empregado',
  templateUrl: './list-empregado.component.html',
  styleUrls: ['./list-empregado.component.css']
})
export class ListEmpregadoComponent implements OnInit {

  displayedColumns: string[] = ['nomeCompleto', 'email', 'estadoCivil', 'fecharEntrada', 'sexo', 'telefone', 'acoes'];
  dataSource = new MatTableDataSource();
  listEmpregado!: Empregado[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.carregarEmpregados();
  }


  constructor(private empregadoService: EmpregadoService,
    public dialog: MatDialog,
    public snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.carregarEmpregados();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  carregarEmpregados(): void {
    this.listEmpregado = this.empregadoService.getEmpregados();
    this.dataSource.data = this.listEmpregado;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.listEmpregado);
  }
  deletarEmpregado(index: number) {
    const dialogRef = this.dialog.open(MensagemConfirmacaoComponent, {
      width: '300px',
      data: { mensagem: 'Está certo que deseja deletar?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      const aceitar = 'aceitar';
      if (result === aceitar) {
        this.empregadoService.deletarEmpregado(index);
        this.carregarEmpregados();
        this.snackbar.open('O empregado foi deletado com sucesso!', '', {
          duration: 3000
        });
      }
    });
  }
}
