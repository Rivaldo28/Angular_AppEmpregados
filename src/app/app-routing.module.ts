
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEditEmpregadoComponent } from "./components/add-edit-empregado/add-edit-empregado.component";
import { ListEmpregadoComponent } from "./components/list-empregado/list-empregado.component";

const routes: Routes = [
  { path: 'add', component: AddEditEmpregadoComponent },
  { path: '', component: ListEmpregadoComponent },
  { path: 'edit/:id', component: AddEditEmpregadoComponent },
  { path: '**', component: ListEmpregadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }