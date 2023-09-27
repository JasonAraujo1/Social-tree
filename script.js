// Selecione o botão pelo seu ID
const meuBotao = document.getElementById("meuBotao");

// Adicione um ouvinte de eventos para o evento de clique
meuBotao.addEventListener("click", function() {
    // Adicione ou remova a classe "clicado" quando o botão for clicado
    this.classList.toggle("clicado");
});
