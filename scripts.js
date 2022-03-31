console.log("Incorporando Arrays");
const carrito = [];
let cantidad = 5;
do
{
    let entrada = prompt("Ingresar producto");
    carrito.push(entrada);
}
while(carrito.length !=cantidad)
alert(carrito)
