// JavaScript Functionality
const amigoInput = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

// Function to add a name to the list
function adicionarAmigo() {
    const nome = amigoInput.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);

    // Update the list display
    atualizarLista();

    // Clear input field
    amigoInput.value = "";
}

// Function to update the displayed list
function atualizarLista() {
    listaAmigos.innerHTML = ""; // Clear the existing list

    for (let amigo of amigos) {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    }
}

// Function to draw a random name
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[randomIndex];

    // Display the result
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${nomeSorteado}</strong></li>`;
}
