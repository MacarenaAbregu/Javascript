let producto = prompt ("Ingrese el producto deseado:")


function compra(productousuario) {
   alert("Usted ha elegido " + productousuario + ",Tiene un 20% de descuento en este producto") 
   console.log("Producto:" + productousuario);
}

compra(producto)




switch (producto) {
   case "Peluche":
      console.log("Elegiste peluche");
      break

      case "Animalito":
         console.log("Elegiste Animalito");
         break

         default:
            console.log("Producto desconocido");
            break


}