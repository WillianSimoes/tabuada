// SELEÇÃO DE ELEMENTOS
const multiplicacaoForm = document.querySelector("#multiplicacao-form");
const numeroInput = document.querySelector("#numero");
const multiplicadorInput = document.querySelector("#multiplicador");

const tituloMultiplicacao = document.querySelector("#titulo-multiplicacao span");

const tabelaMultiplicacao = document.querySelector("#operacoes-multiplicacao");

// FUNÇÕES
const criarTabela = (numero, multiplicador) => {
    tabelaMultiplicacao.innerHTML = "";

    for (i = 1; i <= multiplicador; i++) {
        const resultado = numero * i;
        const template = `
            <div class="row">
                <div class="operacao">${numero} x ${i} = </div>
                <div class="resultado">${resultado}</div>
            </div>
        `
        // imprime as multiplicações no HTML
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        tabelaMultiplicacao.appendChild(row);
    }
    tituloMultiplicacao.innerText = numero;
};


// EVENTOS
multiplicacaoForm.addEventListener("submit", (e) => {
    // impede comportamento padrão do evento, pois neste caso necessita recarregar a página
    e.preventDefault();

    // recebe os valores digitados
    const numeroMultiplicacao = +numeroInput.value;
    const numeroMultiplicador = +multiplicadorInput.value;

    // verifica se os valores de entrada existem, ou seja, se foram preenchidos
    if (!numeroMultiplicacao || !numeroMultiplicador) return;

    // invoca a função para criar a tabela, passando os numeros no parametro
    criarTabela(numeroMultiplicacao, numeroMultiplicador);
});