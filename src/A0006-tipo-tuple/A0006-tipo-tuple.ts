// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Laérth'];
const dadosCliente2: [number, string, string] = [1, 'Laérth', 'Nardelli'];
const dadosCliente3: [number, string, string?] = [1, 'Laérth'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Laérth', 'Nardelli'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Eliz';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Laérth', 'Knodt'];
const array2: ReadonlyArray<string> = ['Laérth', 'Knodt'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
