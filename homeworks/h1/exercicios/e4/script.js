const clientName = prompt("Digite o nome do cliente:");
const attendantName = prompt("Digite o nome do atendente:");

function helpMessage(client, attendant) {
  return alert(`Olá ${client}, eu me chamo ${attendant}. Em que posso ajudar?`);
}

helpMessage(clientName, attendantName);
