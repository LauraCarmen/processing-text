let pisicamea = " Am gasit o pisica pe strada. Pisica era foarte frumoasa si agila. Se catara in copaci si era usor nebuna \
                  dar acum imi place pisica mea. O cheama Magda si este la fel de frumoasa si de nebuna" ;

let cuvinte = ["pisica", "frumoasa", "copaci"];

let pisicameaArray = pisicamea.split(" ");

function f (cuvinte, pisicameaArray) {
  let result = []
  for( let i = 0; i < cuvinte.length; i++) {
   let count = 0;
    for( let z = 0; z < pisicameaArray.length; z++) {
      if (pisicameaArray[z] === cuvinte[i]) 
      count++;
    }
    result[cuvinte[i]] = count;
  }

  return result;
}

console.log(result);

