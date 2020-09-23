//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  const cores = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    for (let index = 0; index < cores.length; index++) {
        if(colors[0] == cores[index]) {
            var cor1 = index;
        }
    }
        for (let index2 = 0; index2 < cores.length; index2++){
            if (colors[1] == cores[index2]){
                var cor2= index2;
            }
        }
       var stringc1= cor1.toString()
       var stringc2= cor2.toString()
        return Number(stringc1+stringc2)
       
    
};
