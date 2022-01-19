
function Cliente(nombre, apellido, correo) {
   this.nombre = nombre;
   this.apellido = apellido;
   this.correo = correo;

   
   this.imprimirNombreCompleto = function () {
     console.log(this.nombre + " " + this.apellido + " " + this.correo)
   }
} 



function enviar () {
   const inputName = document.getElementById("nombre")
   const inputApellido = document.getElementById("apellido")
   const inputCorreo = document.getElementById("correo")
  

   const cliente = new Cliente(inputName.value, inputApellido.value, inputCorreo.value)

   

   cliente.imprimirNombreCompleto()
}









/* function enviar () {
   let nombre, apellido, correo, clave, telefono;
   nombre = document.getElementById("nombre").value;
   apellido = document.getElementById("apellido").value;
   correo = document.getElementById("correo").value;
   clave = document.getElementById("clave").value;
   telefono = document.getElementById("telefono").value;

if(nombre === "" || apellido === "" || correo === ""|| clave === ""|| telefono === "") {
   alert("todos los campos son obligatorios");
   return flase;
}
} */

