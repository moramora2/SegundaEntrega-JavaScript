// Declaro variables necesarias


let nombre;
let apellido;
let edad;
let email;
let valorVivienda;
let montoSolicitado;
let valorviviendaCalculada;
let montoConInteres;
let listaAnos=[];
let textoFinalUsuario;


// Se cargaran las variables desde un prompt, mas adelante se cargaran desde los controles html
function cargarVariables(){
    nombre = "Fulano" //prompt("Ingrese su nombre");
    apellido = "Perez" //prompt("Ingrese su apellido");
    email ="fulano@gmail.com" //prompt("Ingrese email");
    edad = parseInt(prompt("ingrese su edad"));
    valorVivienda = parseInt(prompt("Ingrese el valor total de la vivienda"));
    montoSolicitado =  parseInt(prompt("Ingrese el valor a solicitar"));
    listaAnos.push(5);
    listaAnos.push(10);
    listaAnos.push(15);
    textoFinalUsuario ="";
}

//valido los datos
function validarDatos(){
    //valida el nombre
    if(validarTextoVacio(nombre) == true){
        alert("Ingrese Nombre")
        return false
    }

    //valida el apellido
    if(validarTextoVacio(apellido) == true){
        alert("Ingrese Apellido")
        return false
    }

    //valida el email
    if(validarTextoVacio(email ) == true){
        alert("Ingrese Email")
        return false
    }

    //valida la edad
    if (verificarNumerico(edad) == false || edad < 18 || edad >= 50 ) {
        alert("Ingrese edad correctamente")
        return false
    }

    //valida el monto solicitado
    if (verificarNumerico(montoSolicitado) == false) {
        alert("Ingrese monto a solicitar")
        return false
    }

    //valida el valor de la vivienda
    if (verificarNumerico(valorVivienda) == false) {
        alert("Ingrese valor vivienda")
        return false
    }

    return true    
}

//retorna true si la variable de tipo texto esta vacia
function validarTextoVacio(tmp){
    if(tmp==""){
        return true
    }
}

//esto verifica que la variable de tipo numerica tenga algo cargado
function verificarNumerico(num){
    if (isNaN(num)) {
        return false
    } 
}

//verifico que el monto no supere el valor de la vivienda
function montoSuperior(solicitado, vivienda){
    if(solicitado > vivienda){
        return true
    }
}

//calculo el interes segun los anos del prestamo
function calculoRecargo(importe, anos){
    switch(anos){
        case 5:
            //10% recargo
            return importe * 1.1
        break
        case 10:
            //20% recargo
            return importe * 1.2
        break
        case 15:
            //30% recargo
            return importe * 1.3
        break
    }


}


//llamo a las funciones
//cargo las variables
cargarVariables()

//valido los datos
if (validarDatos()){
    //el prestamo se otorga hasta en un 80% del valor total de la vivienda
    //ej: vivienda 1000, se presta solo 800
    //guardo en la variable el 80% 
    valorviviendaCalculada = valorVivienda * 0.8

    if(montoSuperior(montoSolicitado, valorviviendaCalculada)){
        alert("El prestamo solicitado supera el límite")
    }

    //si llega acà es que tiene aprobado el prestamo
    else { 
        //recorremos el objeto listaAnos para calcular el prestamo en sus diferentes opciones.
        for (let index = 0; index < listaAnos.length; index++) {
            montoConInteres = calculoRecargo(montoSolicitado, listaAnos[index]) 
            textoFinalUsuario = textoFinalUsuario + "Valor de la cuota mensual: " + ((montoConInteres) / (listaAnos[index].toString() * 12)).toFixed(2).toString() + " en " + listaAnos[index].toString() + " años. \n";
        }
        //muestro el resultado con todas las opciones de los años posibles para financiar el prestamo
        alert("Prestamo aceptado.\n" + textoFinalUsuario);
    }
    
    
}