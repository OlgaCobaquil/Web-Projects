import Big from 'big.js';

export default function operar(x, y, operador) {
  const a = Big(x);
  const b = Big(y);

  if (operador === '+') {
    return a.plus(b).toString();
  }
  if (operador === '-') {
    return a.minus(b).toString();
  }
  if (operador === 'x') {
    return a.times(b).toString();
  }
  if (operador === '÷') {
    return a.div(b).round(9).toString();
  }
  throw Error(`Unknown operation '${operador}'`);
}
