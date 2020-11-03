let x: unknown;

x = 100;
x = 'Laérth';
x = 900;
x = 10;
//x = '10';
const y = 800;

//console.log(x + y); // acusa que o x é do tipo unknown

if (typeof x === 'number') console.log(x + y);

// Module mode
export default 1;
