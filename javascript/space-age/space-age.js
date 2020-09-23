//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, num) => {
  var anoTerra = Number((num/31557600).toFixed(2))
  
  switch(planet){
  case 'earth':
  return anoTerra
  break
  case 'mercury':
  var anoResp = Number((anoTerra / 0.2408467).toFixed(2))
  return anoResp
  break
  case 'venus':
    var anoResp = Number((anoTerra / 0.61519726).toFixed(2))
    return anoResp
    break
  case 'mars':
    var anoResp = Number((anoTerra / 1.8808158).toFixed(2))
    return anoResp
    break
  case 'jupiter':
    var anoResp = Number((anoTerra / 11.862615).toFixed(2))
    return anoResp
    break
  case 'saturn':
    var anoResp = Number((anoTerra / 29.447498).toFixed(2))
    return anoResp
    break
    case 'uranus':
    var anoResp = Number((anoTerra / 84.016846).toFixed(2))
    return anoResp
    break
    case 'neptune':
    var anoResp = Number((anoTerra / 164.79132).toFixed(2))
    return anoResp
    break  
}
};
