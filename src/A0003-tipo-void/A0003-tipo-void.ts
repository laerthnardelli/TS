function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Laérth',
  sobrenome: 'Nardelli',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Laérth', 'Nardelli');
pessoa.exibirNome();

export { pessoa };
