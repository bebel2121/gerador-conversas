function enviar() {
  let msg = document.getElementById("mensagem").value;
  let chat = document.getElementById("chat");

  if (msg === "") return;

  chat.innerHTML += `<div class="msg enviar">${msg}</div>`;
  document.getElementById("mensagem").value = "";
}

function receber() {
  let msg = document.getElementById("mensagem").value;
  let chat = document.getElementById("chat");

  if (msg === "") return;

  chat.innerHTML += `<div class="msg receber">${msg}</div>`;
  document.getElementById("mensagem").value = "";
}

function limpar() {
  document.getElementById("chat").innerHTML = "";
}

function baixarPrint() {
  alert("Para baixar print, vou te ensinar o método profissional 👇");

  html2canvas(document.querySelector("#chat")).then(canvas => {
    let link = document.createElement("a");
    link.download = "conversa.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}