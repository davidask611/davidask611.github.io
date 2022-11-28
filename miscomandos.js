function comprarMenu1() {
  let nombrehambur = document.getElementByid("nombrehambur").innerhtml;
  let valorhambur = parseInt(document.getElementById("valorhambur").innerHTML);
  let cantmenu1 = parseInt(document.getElementById("cantidad").value);
  console.log(valorhambur)
  console.log(cantmenu1)
  let confirmado = confirm(
    "Vas a comprar " + nombrehambur + " que cuesta $" + valorhambur*cantmenu1
  );
  if (confirmado) {
    let compraCofirmada = document.createElement("p");
    compraCofirmada.innerHTML =
      "Tu orden de " + nombrehambur + " costara $" + valorhambur*cantmenu1;
    let pedidoagregado = document.getElementById("pedidonuevo");
    pedidoagregado.appendChild(compraCofirmada);
  }
}
