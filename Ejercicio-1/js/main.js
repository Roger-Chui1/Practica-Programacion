/*Realice una clase que tenga dos atributos a, b tipo numéricos y los siguientes métodos
  a. Constructor iniciando los atributos
  b. Método que determine cual de los dos atributos es mayor y mostrar mensaje
  c. Método que multiplique dos números mediante sumas sucesivas
  d. Método que divida dos números mediante restas sucesivas
  e. Método que me permita contar cuantos dígitos tiene un número
*/
class Numeros {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  setA(a) {
    this.a = a;
  }
  setB(b) {
    this.b = b;
  }
  MayorMenor() {
    let n1 = this.a;
    let n2 = this.b;
    if (n1 > n2) {
      return "El numero " + n1 + " es mayor que el numero " + n2;
    } else {
      if (n2 > n1) {
        return "El numero " + n2 + " es mayor que el numero " + n1;
      } else {
        return "Ambos numeros son iguales";
      }
    }
  }
  Multiplicacion() {
    let cont = 0;
    for (let i = 1; i <= this.a; i++) {
      cont += this.b;
      //document.write(cont - n2 + " + " + n2 + " = " + cont + "<br>");

      alert(cont - this.b + " + " + this.b + " = " + cont);
    }
    return "La multiplicacion de " + this.a + " x " + this.b + " = " + cont;
  }
  Division() {
    let n1 = this.a;
    let n2 = this.b;
    let total = n1;
    let cont = 0;
    while (total - n2 >= 0) {
      total = total - n2;
      /*document.write(
        n1 + n2 + " - " + n2 + " = " + total + "<br>"
      );*/
      alert(total + n2 + " - " + n2 + " =" + total);
      cont++;
    }
    return n1 + " / " + n2 + " = " + cont + "<br>Residuo = " + total;
  }
  ContarDigitos() {
    let cont1 = 0;
    let cont2 = 0;
    while (this.a > 1) {
      this.a = this.a / 10;
      cont1++;
    }
    while (this.b > 1) {
      this.b = this.b / 10;
      cont2++;
    }
    return (
      "El primer numero tiene " +
      cont1 +
      " Digitos<br>" +
      "El segundo numero tiene " +
      cont2 +
      " Digitos"
    );
  }
}
let enviar = () => {
  let re = new Numeros();
  let d1 = parseInt(document.getElementById("number1").value);
  let d2 = parseInt(document.getElementById("number2").value);
  re.setA(d1);
  re.setB(d2);
  let opciones = parseInt(document.getElementById("opciones").value);
  switch (opciones) {
    case 1:
      let r1 = `<div class="bg-light rounded p-4 mb-4">
      <p>${re.MayorMenor()}</p>
      </div>`;
      document.getElementById("r").innerHTML = r1;
      break;
    case 2:
      let r2 = `<div class="bg-light rounded p-4 mb-4">
      <p>${re.Multiplicacion()}</p>
      </div>`;
      document.getElementById("r").innerHTML = r2;
      break;
    case 3:
      let r3 = `<div class="bg-light rounded p-4 mb-4">
      <p>${re.Division()}</p>
      </div>`;
      document.getElementById("r").innerHTML = r3;
      break;
    case 4:
      let r4 = `<div class="bg-light rounded p-4 mb-4">
      <p>${re.ContarDigitos()}</p>
      </div>`;
      document.getElementById("r").innerHTML = r4;
      break;
    default:
  }
  document.getElementById("number1").value = null;
  document.getElementById("number2").value = null;
};
