function iniciarsesion() {
  if (
    document.formsesion.usuario.value == "David" &&
    document.formsesion.contraseña.value == "2022"
  ) {
    window.location = "index.html";
  } else {
    alert("Error en Usuario o Contraseña. Intenta de nuevo.");
  }
}
document.oncontextmenu = new Function("return false");

function comprarMenu1() {
  let nombMenu = document.getElementById("nombreMenu1").innerHTML;
  let precioMenu = parseInt(document.getElementById("precioMenu1").innerHTML);
  let cantMenu1 = parseInt(document.getElementById("cant1").value);
  let confirmado = confirm(
    "Tu orden de " +
      cantMenu1 +
      " " +
      nombMenu +
      " tiene un valor de " +
      precioMenu * cantMenu1
  );
  if (cantMenu1 > 1) {
    nombMenu = "Hamburguesas";
  }
  if (confirmado) {
    let compraConfirmada = document.createElement("p");
    compraConfirmada.innerHTML =
      "Tu orden de " +
      cantMenu1 +
      " " +
      nombMenu +
      " tiene un valor de " +
      precioMenu * cantMenu1;
    let pedidoAgre = document.getElementById("nuevoPedido");
    pedidoAgre.appendChild(compraConfirmada);
  }
}

function comprarMenu2() {
  let nombMenu2 = document.getElementById("nombreMenu2").innerHTML;
  let precioMenu2 = parseInt(document.getElementById("precioMenu2").innerHTML);
  let cantMenu2 = parseInt(document.getElementById("cant2").value);
  let aderezos = document.getElementById("aderezos").value;
  if (aderezos == "sinAderezo") {
    aderezos = "sin aderezo";
  } else if (aderezos == "Mayonesa") {
    aderezos = "con mayonesa";
  } else if (aderezos == "Sabora") {
    aderezos = "con sabora";
  } else {
    aderezos = "con ketchup";
  }
  let confirmado = confirm(
    "Tu orden de " +
      cantMenu2 +
      " " +
      nombMenu2 +
      " " +
      aderezos +
      " tiene un valor de " +
      precioMenu2 * cantMenu2
  );
  if (cantMenu2 > 1) {
    nombMenu2 = "Milanesas a la napolitana";
  }
  if (confirmado) {
    let compraConfirmada = document.createElement("p");
    compraConfirmada.innerHTML =
      "Tu orden de " +
      cantMenu2 +
      " " +
      nombMenu2 +
      " " +
      aderezos +
      " tiene un valor de " +
      precioMenu2 * cantMenu2;
    let pedidoAgre = document.getElementById("nuevoPedido");
    pedidoAgre.appendChild(compraConfirmada);
  }
}

function comprarMenu3() {
  let nombMenu3 = document.getElementById("nombreMenu3").innerHTML;
  let precioMenu3 = parseInt(document.getElementById("precioMenu3").innerHTML);
  let cantMenu3 = parseInt(document.getElementById("cant3").value);
  let confirmado = confirm(
    "Tu orden de " +
      cantMenu3 +
      " " +
      nombMenu3 +
      " tiene un valor de " +
      precioMenu3 * cantMenu3
  );
  if (cantMenu3 > 1) {
    nombMenu3 = "Pizzas";
  }
  if (confirmado) {
    let compraConfirmada = document.createElement("p");
    compraConfirmada.innerHTML =
      "Tu orden de " +
      cantMenu3 +
      " " +
      nombMenu3 +
      " tiene un valor de " +
      precioMenu3 * cantMenu3;
    let pedidoAgre = document.getElementById("nuevoPedido");
    pedidoAgre.appendChild(compraConfirmada);
  }
}

function comprarMenu4() {
  let nombMenu4 = document.getElementById("nombreMenu4").innerHTML;
  let precioMenu4 = parseInt(document.getElementById("precioMenu4").innerHTML);
  let cantMenu4 = parseInt(document.getElementById("cant4").value);
  let sabores = document.getElementById("sabores").value;
  if (sabores == "sinSalsa") {
    sabores = "sin salsa";
  } else if (sabores == "Salsabl") {
    sabores = "con salsa blanca";
  } else sabores = "con salsa fileto";

  let confirmado = confirm(
    "Tu orden de " +
      cantMenu4 +
      " platos de " +
      nombMenu4 +
      " " +
      sabores +
      " tiene un valor de " +
      precioMenu4 * cantMenu4
  );
  if (cantMenu4 > 1) {
    nombMenu4 = "platos de Ravioles";
  }
  if (confirmado) {
    let compraConfirmada = document.createElement("p");
    compraConfirmada.innerHTML =
      "Tu orden de " + cantMenu4 + " " + nombMenu4 + " " + sabores + " ";
    " tiene un valor de " + precioMenu4 * cantMenu4;
    let pedidoAgre = document.getElementById("nuevoPedido");
    pedidoAgre.appendChild(compraConfirmada);
  }
}
