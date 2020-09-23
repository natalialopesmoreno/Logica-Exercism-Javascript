//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (Color) => {
  const colors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  if(Color == null){
     return colors; 
    } if(Color == 'COLORS'){
    return colors;
  }
  else { 
      for(var i = 0; i< 10; i++){
          if(colors[i] == Color){
            return i;
          }

      }

   } 

};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
