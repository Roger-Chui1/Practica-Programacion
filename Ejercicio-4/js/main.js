/*Suponga que está escribiendo un programa que se ejecutará en el ordenador de una caja de una tienda. Tiene que escribir un método que reciba el total de la compra efectuada y el importe que entrega el cliente. El método mostrará por pantalla "falta importe" cuando la cantidad entregada sea inferior al total de la compra. "Gracias por su compra" si el importe entregado es exacto al de la compra. Y, "su cambio es X", donde X es el cambio a devolver si la cantidad entregada supera al total de la compra.
Definir los atributos y el método constructor iniciando variables.
 */
class CajaTienda {
  constructor(total) {
    this.total = total;
  }
  setTotal(total) {
    this.total = total;
  }
  getTotal() {
    return this.total;
  }
  CobroDeCompra() {
    let imp = parseInt(document.getElementById("pago").value);
    if (this.total == imp) {
      return "Gracias por su compra";
    } else if (imp > this.total) {
      let cambio = imp - this.total;
      return "Su cambio es " + cambio;
    } else {
      return "Falta importe";
    }
  }
}

let caja = new CajaTienda();
let total = parseInt(
  prompt("Introduzca el monto total a pagar de los productos")
);
caja.setTotal(total);
document.getElementById("total").innerHTML = caja.getTotal();

let mostrar = () => {
  document.getElementById("men").innerHTML = caja.CobroDeCompra();
  document.getElementById("pago").value = "";
};
