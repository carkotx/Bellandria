// simUlador interactivo de compras del centro de estetica Bellandria

// function saludarCliente() {
//     alert("Bienvenido al Centro de estetica BELLANDRIA");
//     const seguir = confirm("Desea conocer los servicios? ");
//     return seguir;
// }

// function mostrarProductos() {
//     let elegirProducto;
//     do {
//     elegirProducto = parseInt(
//     prompt("1)Limpieza facial \n2)Micro demoabrarsion\n3)Peeling facial"));

   
//     switch (elegirProducto) {
// case 1:
//     elegirProducto = "Limpieza facial";
//     break;
   
// case 2:
//     elegirProducto = "Micro demoabrasion";
//     break;

// case 3:
//     elegirProducto = "Peeling facial";
//     break; 
//  }

// } while (elegirProducto < 1 || elegirProducto > 3);
//     return elegirProducto;
// }

// function calcularPrecio(respuestaProducto){
//     let precioAbonar;
//     if(respuestaProducto === "Limpieza facial"){
//         precioAbonar = 800
//     } else if(respuestaProducto === "Micro demoabrasion" ){
//         precioAbonar = 1000
//     } else{
//         precioAbonar = 800
//     }
//     return precioAbonar;
    
// }

// function cobrar(respuestaProducto,respuestaPrecio){
// alert("usted se aplicara" + respuestaProducto + ".\nPrecio $ " + respuestaPrecio);

// let pago = parseInt(prompt("Con cuanto abona?"));
// while(isNaN(pago)) {
//     pago = parseInt (prompt("Con cuanto abona?"));
// }

// if (pago >= respuestaPrecio) {
//    alert("su vuelto es" + (pago - respuestaPrecio));
// }else{
//     alert("no alcanza!");
// }

// let continuar = confirm("Desea sumar otro servicio?");
// if(continuar){
//     init();
// } else{
//     alert("Vuelva pronto!");
// }
// }

// function init() {
//     const respuestaSeguir = saludarCliente();
//     if (respuestaSeguir){
//     const respuestaProducto = mostrarProductos();
//     const respuestaPrecio = calcularPrecio(respuestaProducto);
//     cobrar(respuestaProducto,respuestaPrecio)
  
//     } else {
//         alert("vuelva pronto!");
//     }
// }

// init();


