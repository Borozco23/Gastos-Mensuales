let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton(){
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
      
    if  (valorGasto > 150) {
        alert("Tu gasto es mayor a 150 USD");

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto); 

    

    actualizarListaGastos();

}

function actualizarListaGastos (){
   const listaElementos= document.getElementById("listaDeGastos");
 const totalElementos= document.getElementById("totalGastos");
   let htmLista = '';
 let totalGastos = 0;
listaNombresGastos.forEach((elemento,posicion) => {

    console.log(elemento);
    console.log(posicion);
const valorGasto = listaValoresGastos[posicion];
    htmLista += `<li> ${elemento} - USD ${valorGasto}
     <button onclick="editarGasto(${posicion});">Editar</button>
    <button onclick="eliminarGasto(${posicion});">Eliminar</button></li>`;
    totalGastos += Number(valorGasto);
    
});

listaElementos.innerHTML = htmLista;
totalElementos.innerHTML = totalGastos;
limpiar();
}

function limpiar(){
    document.getElementById("nombreGasto").value="";
    document.getElementById("valorGasto").value="";
}
function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];


    let botonAgregar = document.getElementById('botonAgregar');
    let botonActualizar = document.getElementById('botonActualizar');
    botonAgregar.style.display = 'none';
    botonActualizar.style.display = 'flex';
    let htmlLista = `<button id="botonActualizar" onclick="clickActualizar(${posicion});">Actualizar Gasto</button>`
    document.getElementById('botonActualizar').innerHTML = htmlLista;
}

}

