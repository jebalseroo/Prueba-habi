// funciones usuadas
function convertirStringaNumeros(a){
  ```convierete una cadena de string a codigos ascii
  toma como valor de a la el string a convertir```
  const n = []
  for (const value of a) {
    n.push(value.charCodeAt(0))
  }
  return(n)
}   
function convertirNumerosAString(a){
  ```convierete codigos ascii y los convirte a un string
  toma como valor de a la el string a convertir```
  n = ''
  for (const value of a){
    n = n + String.fromCharCode(value)
  }
  return(n)
}
function clasificador(num){
  ```clasifica si un caracter en ascii es numero par o impar 
  letra numuscula o mayuascula```
  if (num >= 48 & num <= 57){
    if( num % 2 === 0) {
      return 'Numero par'
    }
    else{
      return 'Numero impar'
    }
  }
  if (num >= 65 & num <= 90){
    return 'Mayuscula'
  }
  if (num >= 97 & num <= 122){
    return 'Minuscula'
  }
  return 'Caracter no encontrado'
}
// primer punto 

async function punto1(){
  a = document.getElementById("myInput").value; //cadena tomada del HTML 
  b = a.split('')                               //comvierte la cadena en arrive
  b = convertirStringaNumeros(b)                // convierte el arrive en codigo ascii

  //se inicializan los arrive
  Mayusculas = [];
  Minusculas = [];
  Numeros_Pares = [];
  Numeros_Impares = [];

  // clasifica los codigos
  for (x in b){
    c = clasificador(b[x])
    if (c === 'Numero par'){
      Numeros_Pares.push(b[x])
    }
    if( c === 'Numero impar'){
      Numeros_Impares.push(b[x])
    }
    if (c === 'Mayuscula'){
      Mayusculas.push(b[x])
    }
    if (c === 'Minuscula'){
      Minusculas.push(b[x])
    }
  }

  // ordenan los arrive
  Numeros_Pares.sort()
  Numeros_Impares.sort()
  Mayusculas.sort()
  Minusculas.sort()
  // genera la caddena final 
  a =  convertirNumerosAString(Minusculas) + convertirNumerosAString(Mayusculas) + convertirNumerosAString(Numeros_Impares) + convertirNumerosAString(Numeros_Pares)
  document.getElementById('output1').textContent = a; //envia la cadena al HTML 

}

// tercer punto 
async function loadFile(file) {
  let text = await file.text();               // abre el domuneto cargado por el HTML 
  res = []                                    // inicilaiza el arrive respuesta 
  a = text.split("\r\n");                     // separa el documento por lineas 
  for (const value of a){
    c = value.split("http://");               // localiza el inicio de las URI y separa el arrive 
    if (c.length > 1){                        // compueba que exista almenos 2 arreglos 
      for (const line of c){                
        if (line.substr(0,4) !== "<li "){     // comprueba que en el arreglo con empiese con <li 
          d = line.split("/",1);              // separa el arreglo por / 
          e = d[0]
          if (d[0].indexOf("www.") >= 0 | d[0].indexOf("ww2.") >= 0){ //compueba que tenga el prefijo 
            e = d[0].substr(4)                // quita los prefijos 
          }          
          if (res.indexOf(e) === -1){         // cumprueba que el dominio no este en el arrive de respuesta 
            res.push(e)                       // guarda el dominio 
          }
        }
      }
    }
  }
  a = ''
  for (const x of res.sort()){                //genera el siclo para obterner el string final y lo ordena 
    a = a + x + ";"
  }

  document.getElementById('output').textContent = a; //envia el string final al HTML 
}