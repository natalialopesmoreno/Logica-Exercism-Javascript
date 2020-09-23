//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (data) => {
  var gs = Math.pow(10, 9)
  var ms = 1000000000000
  var dataMS = data.getTime()
  var newDate = new Date(dataMS + ms)
  
  return newDate
};
