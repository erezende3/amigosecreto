const amigoInput = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];
let listaResetada = false; // Indicador para saber se a lista foi resetada

// Função para adicionar nomes na lista
function adicionarAmigo() {
    const nome = amigoInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira o nome de seu amigo(a).");
        return;
    }

    // Se a lista foi resetada, limpar a mensagem de reset
    if (listaResetada) {
        resultado.innerHTML = ""; // Apaga o texto de reset
        listaResetada = false; // Resetar o indicador
    }

    amigos.push(nome);

    // Atualizar a lista de amigos
    atualizarLista();

    // Limpar o campo
    amigoInput.value = "";
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    listaAmigos.innerHTML = ""; // Limpar a lista

    amigos.forEach((amigo) => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[randomIndex];

    // Apresentar o resultado e mantê-lo na tela
    resultado.innerHTML += `<li>O amigo secreto é: <strong>${nomeSorteado}</strong></li>`;

    // Perguntar ao usuário se deseja criar uma nova lista ou finalizar
    setTimeout(() => {
        const resposta = prompt("Deseja criar uma nova lista? S/N").toLowerCase();

        if (resposta === "s") {
            // Limpar a lista e reiniciar
            amigos = [];
            listaAmigos.innerHTML = "";
            resultado.innerHTML = "<li><strong>Lista resetada. Adicione novos amigos!</strong></li>";
            listaResetada = true; // Marcar que a lista foi resetada
        } else if (resposta === "n") {
            // Manter a lista e exibir mensagem
            resultado.innerHTML += `<li><strong>Boa diversão!!!</strong></li>`;
        } else {
            // Resposta inválida
            alert("Opção inválida. Digite apenas S ou N.");
        }
    }, 100); // Pequeno atraso para garantir a exibição do resultado antes do prompt
}
