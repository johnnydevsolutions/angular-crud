export class Produto {
  _id?: number;
  nome: string;
  categoria: string;
  quantidade: number; //alteração quantidade e number se quiser localização mudar para localizacao string
  preco: number;

  constructor(nome: string, categoria: string, quantidade: number, preco: number ){
      this.nome = nome;
      this.categoria = categoria;
      this.quantidade = quantidade; //alteração
      this.preco = preco;
  }
}
