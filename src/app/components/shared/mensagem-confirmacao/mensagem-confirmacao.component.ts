import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mensagem-confirmacao',
  templateUrl: './mensagem-confirmacao.component.html',
  styleUrls: ['./mensagem-confirmacao.component.css']
})
export class MensagemConfirmacaoComponent implements OnInit {

  mensagem: string;
  btn = 'aceitar';
  constructor(public dialogRef: MatDialogRef<MensagemConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.mensagem = data.mensagem;
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

