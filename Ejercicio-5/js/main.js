class Usuario {
  constructor(nit, nom, ape, obs) {
    this.nit = nit;
    this.nom = nom;
    this.ape = ape;
    this.obs = obs;
  }
  InsertarCliente(nit,nom,ape,obs){
    nit = parseInt(prompt("Ingrese el nit"));
    nom = prompt("Ingrese el nombre");
    ape = prompt("Ingrese el apellido");
    obs = prompt("Ingrese la observacion");
    this.nit = nit;
    this.nom = nom;
    this.ape = ape;
    this.obs = obs;
    alert("Usuario insertado correctamente");
  }
  EditarCliente(nit,nom,ape,obs) {
    nit = parseInt(prompt("Ingrese el nit del usuario que quiere editar"));
    if (this.nit == nit){
      nom = prompt("Ingrese el nombre");
      ape = prompt("Ingrese el apellido");
      obs = prompt("Ingrese la observacion");
      this.nom = nom;
      this.ape = ape;
      this.obs = obs;
    }else{
      alert("EL usuario no existe");
    }
  }
  BorraCliente(nit) {
    nit = parseInt(prompt("Ingrese el nit del usuario que quiere borrar"));
    if(this.nit == nit){
      this.nit = null;
      this.nom = null;
      this.ape = null;
      this.obs = null;
      alert("Usuario Borrado");
    }else{
      alert("Usuario no existe");
    }
  }
  Mostrar() {
    let datos = `<tr><td>${this.nit}</td>
                <td>${this.nom}</td>
                <td>${this.ape}</td>
                <td>${this.obs}</td></tr>`;
    $(document).ready(function(){
    $("#datos").append(datos);
  });
  }
}
let usuario1 = new Usuario(428454017,"Juan","Tarqui Mamani","Nuevo");
let usuario2 = new Usuario(432121018,"Marcio","Rodriguez Roble","Antiguo");
let usuario = new Usuario();
let insertar = ()=>{
  usuario.InsertarCliente();
}
let editar = ()=>{
  usuario.EditarCliente();
}
let borrar = ()=>{
  usuario.BorraCliente();
}
let mostrar = ()=>{
  usuario1.Mostrar();
  usuario2.Mostrar();
  usuario.Mostrar();
}
