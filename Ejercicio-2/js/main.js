/*Escriba una clase que tenga dos atributos cade1, cade2 tipo cadenas y los siguientes métodos
 	a. Constructor iniciando los atributos
	b. Método que determine cuanto carácter tiene una cadena
  c. Método mostrar el ultimo carácter de una cadena
  d. Método para comparar si cade1 y cade2 son iguales
  e. Método que me permita determinar si una cadena es capicúa
  f. Método que te recorra y muestre cada carácter de una cadena
*/
class Cadenas {
  constructor(cade1, cade2) {
    this.cade1 = cade1;
    this.cade2 = cade2;
  }
  setCade1(cade1) {
    this.cade1 = cade1;
  }
  setCade2(cade2) {
    this.cade2 = cade2;
  }
  ContarCaracter() {
    let c1 = this.cade1.length;
    let c2 = this.cade2.length;
    return "La cadena1 tiene " + c1 + " caracteres<br>La cadena1 tiene " + c2 + " caracteres";
  }
  UltimoCaracater() {
    let c1 = this.cade1.length;
    let c2 = this.cade2.length;
    c1 = this.cade1.charAt(c1 - 1);
    c2 = this.cade2.charAt(c2 - 1)
    return "El ultimo caracter de la cadena 1 es " + c1 +"<br>El ultimo caracter de la cadena 2 es " + c2;
  }
  CompararCadena() {
    let c1 = this.cade1;
    let c2 = this.cade2;
    if (c1 == c2) {
      return "Las  cadenas son iguales";
    } else {
      return "Las cadenas no son iguales";
    }
  }
  CadenaCapicua() {
    let c1 = this.cade1.replace(/ /g, "").toLowerCase();
    let c2 = c1.split("").reverse().join("");
    if (c1 === c2) {
      return "La cadena es capicua";
    } else {
      return "La cadena no es capicua";
    }
  }
}
let enviar = () => {
  let re = new Cadenas();
  let d1 = document.getElementById("cade1").value;
  let d2 = document.getElementById("cade2").value;
  re.setCade1(d1);
  re.setCade2(d2);
  let opciones = parseInt(document.getElementById("opciones").value);
  switch (opciones) {
    case 1:
      let r1 = `<div class="bg-light rounded p-4 mb-4">
      <p>${re.ContarCaracter()}</p>
      </div>`;
      document.getElementById("r").innerHTML = r1;
      break;
    case 2:
      let r2 = `<div class="bg-light rounded p-4 mb-4">
      <p>${re.UltimoCaracater()}</p>
      </div>`;
      document.getElementById("r").innerHTML = r2;
      break;
    case 3:
      let r3 = `<div class="bg-light rounded p-4 mb-4">
      <p>${re.CompararCadena()}</p>
      </div>`;
      document.getElementById("r").innerHTML = r3;
      break;
    case 4:
      let r4 = `<div class="bg-light rounded p-4 mb-4">
      <p>${re.CadenaCapicua()}</p>
      </div>`;
      document.getElementById("r").innerHTML = r4;
      break;
    default:
  }
  document.getElementById("cade1").value = null;
  document.getElementById("cade2").value = null;
};
