//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const accumulate = (entrada) => {
  
  var resultado = []

  for(var i = 0; i< entrada.length; i++){

    var inserir = entrada[i] * entrada[i]
    resultado.push(inserir)

  }

  return resultado

};
