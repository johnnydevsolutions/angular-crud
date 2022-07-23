import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent implements OnInit {
  produtoForm: FormGroup;
  titulo = 'Criar produto';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router, //Redirecionar
              private toastr: ToastrService, //Mensages
              private _produtoService: ProdutoService,
              private aRouter: ActivatedRoute) {
    this.produtoForm = this.fb.group({
      produto: ['', Validators.required],
      categoria: ['', Validators.required],
      localizacao: ['', Validators.required],
      preco: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
  }
   agregarProduto() {

    const PRODUTO: Produto = {
      nome: this.produtoForm.get('produto')?.value,
      categoria: this.produtoForm.get('categoria')?.value,
      localizacao: this.produtoForm.get('localizacao')?.value,
      preco: this.produtoForm.get('preco')?.value,
    }


    console.log(PRODUTO);
    this.toastr.success('O produto foi registrado com exito!');
    this.router.navigate(['/listar-produto']);

    /*
    this._produtoService.guardarProduto(PRODUTO).subscribe(data => {
      this.toastr.success('o produto fOI registrado coM exito!', 'Produto Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.productoForm.reset();
    })


  }
*/
  }

}
