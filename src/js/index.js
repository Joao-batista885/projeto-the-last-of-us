const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indece) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarNovaImagem(indece);
    })
})

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function mostrarNovaImagem(indece) {
    imagens[indece].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
