//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (elmt) => {
  var DNA = ["G","C","T","A"]
var RNA = ["C","G","A","U"]
var RESP = []

var arrayElm = elmt.split('')
arrayElm.forEach(element => {
  for (let index = 0; index < DNA.length; index++) {
    if(element == DNA[index]){
      RESP.push(RNA[index])
    }
    
  }
  

})
var resposta = RESP.join('')
return resposta
};
