export interface Cidade{
  id: number;
  nome: string;
  estado: string;
}
export interface People {
  id: number;
  nome: string;
  apelido: string;
  time: string;
  cpf: string;
  hobbie: string;
  cidade: Cidade;
}
