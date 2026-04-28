const nameInput = document.getElementById("name");
const chatName = document.getElementById("chatName");
const msgInput = document.getElementById("msg");
const messages = document.getElementById("messages");
const profile = document.getElementById("profile");
const photoInput = document.getElementById("photo");

// Atualizar nome
nameInput.addEventListener("input", () => {
  chatName.innerText = nameInput.value || "Contato";
});

// Foto
photoInput.addEventListener("change", function() {
  const file = this.files[0];
  if(file){
    profile.src = URL.createObjectURL(file);
  }
});

// Hora atual
function getTime(){
  const now = new Date();
  return now.getHours().toString().padStart(2, '0') + ":" +
         now.getMinutes().toString().padStart(2, '0');
}

// Enviar msg
function sendMsg(){
  createMsg("sent");
}

// Receber msg
function receiveMsg(){
  createMsg("received");
}

// Criar mensagem
function createMsg(type){
  const text = msgInput.value.trim();
  if(!text) return;

  const div = document.createElement("div");
  div.classList.add("message", type);

  div.innerHTML = `
    ${text}
    <span class="time">${getTime()}</span>
  `;

  messages.appendChild(div);
  msgInput.value = "";

  messages.scrollTop = messages.scrollHeight;
}

// Limpar
function clearChat(){
  messages.innerHTML = "";
}

// Baixar print
function download(){
  html2canvas(document.getElementById("capture")).then(canvas => {
    const link = document.createElement("a");
    link.download = "conversa.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}