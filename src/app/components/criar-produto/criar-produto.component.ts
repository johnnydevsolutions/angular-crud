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
              private toastr: ToastrService, //Mensagens
              private _produtoService: ProdutoService,
              private aRouter: ActivatedRoute) {
    this.produtoForm = this.fb.group({
      produto: ['', Validators.required],
      categoria: ['', Validators.required],
      quantidade: ['', Validators.required], //alteração localizacao por quantidade
      preco: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }
   agregarProduto() {

    const PRODUTO: Produto = {
      nome: this.produtoForm.get('produto')?.value,
      categoria: this.produtoForm.get('categoria')?.value,
      quantidade: this.produtoForm.get('quantidade')?.value, //alteração
      preco: this.produtoForm.get('preco')?.value,
    }

    if(this.id !== null) {
      // Edito o produto

      this._produtoService.editarProduto(this.id, PRODUTO).subscribe(data => {
        this.toastr.info('Produto editado com sucesso', 'Produto editado');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.produtoForm.reset();
      })

    } else {
      // agregamos produto
      console.log(PRODUTO);
    this._produtoService.guardarProduto(PRODUTO).subscribe(data => {
      this.toastr.success('Produto criado com sucesso', 'Produto criado');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.produtoForm.reset();
    })
    }



    console.log(PRODUTO);
    this.toastr.success('O produto foi registrado com exito!');
    this.router.navigate(['/listar-produto']);

  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar producto';
      this._produtoService.obterProduto(this.id).subscribe(data => {
        this.produtoForm.setValue({
          produto: data.nome,
          categoria: data.categoria,
          localizacao: data.localizacao,
          preco: data.preco,
        })
      })
    }
  }
}
