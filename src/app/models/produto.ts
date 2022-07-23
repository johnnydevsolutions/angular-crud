export class Produto {
  _id?: number;
  nome: string;
  categoria: string;
  localizacao: string;
  preco: number;

  constructor(nome: string, categoria: string, localizacao: string, preco: number ){
      this.nome = nome;
      this.categoria = categoria;
      this.localizacao = localizacao;
      this.preco = preco;
  }
}
