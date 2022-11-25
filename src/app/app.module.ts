import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AddEditEmpregadoComponent } from './components/add-edit-empregado/add-edit-empregado.component';
import { ListEmpregadoComponent } from './components/list-empregado/list-empregado.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MensagemConfirmacaoComponent } from './components/shared/mensagem-confirmacao/mensagem-confirmacao.component'
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmpregadoComponent,
    ListEmpregadoComponent,
    NavbarComponent,
    MensagemConfirmacaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
