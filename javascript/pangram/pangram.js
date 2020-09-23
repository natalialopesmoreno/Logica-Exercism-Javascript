//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string1) => {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var string = string1.replace(' ', '')
  var String = string.toLowerCase()
  var ArrString = String.split('')
  var arrCompare = 0;
  var resp = false;
  for(var i = 0 ; i<alphabet.length; i++){
        if(ArrString.includes(alphabet[i])){
          arrCompare++
        }
      
    }
    


  if(arrCompare == alphabet.length){
      resp = true;
  }
  return resp

};

//if(alphabet[i] == ArrString[i]){
  //arrCompare += 1}
