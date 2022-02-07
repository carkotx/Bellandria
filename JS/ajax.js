$.get("/data.json", (data) => {
    

  data.forEach((producto) => {
      $("#productos").append(`
      <div class="col-xl-4 col-sm-6">
          <div class="card">
              <div class="card">
                  <h4> Tipo: ${ producto.nombre } </h4> 
                  <p> Precio: $ ${ producto.precio } </p> 
                  <img src= "${ producto.imagen}"  > 

               <button class="btn btn-danger" id="btn${producto.id}"> Comprar </button> 
              </div>
          </div>
      </div>
  `)
      $(`#btn${producto.id}`).on("click", function() {
          agregarProducto(producto);
      });
  })
})

let array=[]

const agregarProducto= (productoAgregado)=>{
  array.push(productoAgregado)
  
  Swal.fire(
      "Producto agregado",
      productoAgregado.nombre,
      "success"
  );
  localStorage.setItem("productos", JSON.stringify(array));
  $("#tabla").append(`
  <tr>
      <td>${productoAgregado.id}</td>
      <td>${productoAgregado.nombre}</td>
      <td>${productoAgregado.precio}</td>
  </tr>`);
$("#resultado").append(sumarCompra())

}

const sumarCompra=()=>{
  let total=0;
  for (const electronica  of array) {
      
      total+=electronica.precio
      resultado.innerText=total
  }
}


$("#boton").on("click",function(){
  mostrarPorConsola()
})

const mostrarPorConsola = ()=>{
console.log(array)
}