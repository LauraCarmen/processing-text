let pisicamea = " Am gasit o pisica pe strada. Pisica era foarte frumoasa si agila. Se catara in copaci si era usor nebuna \
                  dar acum imi place pisica mea. O cheama Magda si este la fel de frumoasa si de nebuna" ;

let cuvinte = ["pisica", "frumoasa", "copaci"];

pisicameaArray = pisicamea.split(" ");

function (cuvinte, pisicameaArray) {
  for( i = 0; i < cuvinte.length; i++) {
     count = 0;
    for( z = 0; z < pisicameaArray.length; z++) {
      if (pisicameaArray[z] === cuvinte[i]) 
      count++;
    }
  }
}

