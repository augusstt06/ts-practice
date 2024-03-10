// type Add = {
//   (a: number, b: number): number;
//   (a: number, b: string): number;
// };

// //  error TS2365: Operator '+' cannot be applied to types 'number' and 'string | number'.
// function add(a, b): Add {
//   return a + b;
// }

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: any, b: any): any {
  return a + b;
}
const answer1 = console.log(add2(1, 2));
const answer2 = console.log(add2("1", "2"));
