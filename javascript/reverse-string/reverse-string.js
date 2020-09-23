//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (nome) => {
  var array = nome.split('');// [a,m,o,r,]
  var reverso = array.reverse()//[r,o,m,a,]
  var resposta = reverso.join('')//roma
  return resposta
};
