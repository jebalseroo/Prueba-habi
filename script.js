function convertirStringaNumeros(a){
  const n = []
  for (const value of a) {
    n.push(value.charCodeAt(0))
  }
  return(n)
}   
function convertirNumerosAString(a){
  n = ''
  for (const value of a){
    n = n + String.fromCharCode(value)
  }
  return(n)
}
function clasificador(num){
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

async function punto1(){
  a = document.getElementById("myInput").value;
  console.log(a);
  b = a.split('')
  b = convertirStringaNumeros(b)
  Mayusculas = [];
  Minusculas = [];
  Numeros_Pares = [];
  Numeros_Impares = [];
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
  Numeros_Pares.sort()
  Numeros_Impares.sort()
  Mayusculas.sort()
  Minusculas.sort()
  a =  convertirNumerosAString(Minusculas) + convertirNumerosAString(Mayusculas) + convertirNumerosAString(Numeros_Impares) + convertirNumerosAString(Numeros_Pares)
  document.getElementById('output1').textContent = a;

}




// tercer punto 
async function loadFile(file) {
  let text = await file.text();
  res = []
  a = text.split("\r\n");
  for (const value of a){
    c = value.split("http://");
    if (c.length > 1){
      for (const line of c){
        if (line.substr(0,4) !== "<li "){
          d = line.split("/",1);
          e = d[0]
          if (d[0].indexOf("www.") >= 0 | d[0].indexOf("ww2.") >= 0){
            e = d[0].substr(4)
          }          
          if (res.indexOf(e) === -1){
            res.push(e)
          }
        }
      }
    }
  }
  a = ''
  for (const x of res.sort()){
    a = a + x + ";"
  }

  document.getElementById('output').textContent = a;
}