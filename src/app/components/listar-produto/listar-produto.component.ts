import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {
  listProdutos: Produto[] = [];

  constructor(private _produtoService: ProdutoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obterProdutos();
  }

  obterProdutos() {
    this._produtoService.getProdutos().subscribe(data => {
      console.log(data);
      this.listProdutos = data;
  }, error => {
      console.log(error);
  }
    );}

    eliminarProducto(id: any) {
      this._produtoService.eliminarProduto(id).subscribe(data => {
        this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
        this.obterProdutos();
      }, error => {
        console.log(error);
      })
    }
}
