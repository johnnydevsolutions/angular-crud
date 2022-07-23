import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';

// Components
import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';

const routes: Routes = [
  { path: '', component: ListarProdutoComponent},
  { path: 'criar-produto', component: CriarProdutoComponent},
  { path: 'editar-produto/:id', component: CriarProdutoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
