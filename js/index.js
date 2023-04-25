a = 123;
b = 456;
c = a+b;
texto = "Hola Mundo";
console.log("El resultado es: ", c);
console.warn("El resultado es: ", c);
console.error("El resultado es: ", c);
console.info("El resultado es: ", c);
console.info("El resultado es: ", texto);
//lavariable =document.getElementById("#brand-name")
//lavariable.innerHTML = "HOLA MUNDO";
arreglos = [3,4,5,6,7,"abc" , "def"];
console.log(arreglos[5]);
diccionario = {"nombre":"juan", "apellido":"perez"}
console.log(diccionario.nombre);
console.log(diccionario.apellido);
basedatos = [
    {
        "nombre":"juan", "apellido":"perez"
    },

    {
        "nombre":"maria", "apellido":"soto"
    }

];
console.error(basedatos[0].nombre);
for(i=0;i<basedatos.length;i++){
    console.warn(basedatos[i].nombre);
}
z=0
while(z<basedatos.length){
    console.log(basedatos[z].nombre);
    z++;
}
for(var elemento of basedatos){
    console.log(elemento.nombre);
}
console.log(basedatos);
basedatos.forEach(element => {
    console.log(elemento.apellido);
    
});

//tarea:
/*
1.- crea una variable llamada basedatos, que contenga un listado de 10 productos. (id,nombreproducto,cantidad,precio,imagen)

*/


