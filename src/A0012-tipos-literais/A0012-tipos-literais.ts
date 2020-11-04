let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const pessoa = {
  nome: 'Laérth' as const,
  sobrenome: 'Nardelli',
};

pessoa.nome = 'Laérth';
//pessoa.nome = 'Eliz'; //nesse caso Eliz não pode ser atribuido.

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'), pessoa, x, y);

export default 1;
