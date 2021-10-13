/*Escriba una clase que tenga como atributo un vector de tipo numérico y los siguientes métodos
  a. Método para introducir datos a un vector
  b. Método para ordenar el vector ascendentemente 
  c. Método invertir los datos de un vector 
  d. Método para determinar si es capicúa
  e. Método que permita sumar los componentes del vector
*/
class Vector {
  constructor(vec) {
    this.vec = [];
  }
  IntroducirDatos() {
    let cant = parseInt(prompt("Introduzca la cantidad de datos a ingresar"));
    for (let i = 1; i <= cant; i++) {
      let datos = parseInt(prompt("Ingrese el dato " + i));
      this.vec.push(datos);
    }
    return "Datos introducidos " + this.vec;
  }
  OrdenarDatos() {
    let aux;
    for (let i = 0; i < this.vec.length; i++) {
      for (let j = i + 1; j < this.vec.length; j++) {
        if (this.vec[i] > this.vec[j]) {
          aux = this.vec[i];
          this.vec[i] = this.vec[j];
          this.vec[j] = aux;
        }
      }
    }
    return "Datos ordenados " + this.vec;
    //return this.vec.sort();
  }
  InvertirDatos() {
    let aux;
    for (let i = 0; i < this.vec.length; i++) {
      for (let j = i + 1; j < this.vec.length; j++) {
        aux = this.vec[i];
        this.vec[i] = this.vec[j];
        this.vec[j] = aux;
      }
    }
    return "Datos invertidos " + this.vec;
  }
  DatosCapicua() {
    let a = this.vec.toString();
    let b = this.vec.toString().split("").reverse().join("");
    if (a === b) {
      return "El arreglo es capicua";
    } else {
      return "El arreglo no es capicua";
    }
  }
  SumarDatos() {
    let suma = 0;
    for (let i = 0; i < this.vec.length; i++) {
      suma += this.vec[i];
    }
    return "La suma de datos es " + suma;
  }
}
let v = new Vector();
let fun1 = () => {
  document.getElementById("r1").innerHTML = v.IntroducirDatos();
};
let fun2 = () => {
  document.getElementById("r2").innerHTML = v.OrdenarDatos();
};
let fun3 = () => {
  document.getElementById("r3").innerHTML = v.InvertirDatos();
};
let fun4 = () => {
  document.getElementById("r4").innerHTML = v.DatosCapicua();
};
let fun5 = () => {
  document.getElementById("r5").innerHTML = v.SumarDatos();
};
