// Links Menu
const links = document.querySelectorAll('.header-menu a');

function activeLink(item) {
 let urlAtual = document.location.href;
 let link = item.href
 if (urlAtual.includes(link)) {
  item.classList.add('active');
 }
};

links.forEach(activeLink);
// Links Menu

// Itens Orcamento
const params = new URLSearchParams(location.search);

function activeProdutos(parametro) {
 const element = document.getElementById(parametro);
 if (element) {
  element.checked = true;
 }
};

params.forEach(activeProdutos);
// Itens Orcamento

// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function activePergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls)

    resposta.classList.toggle('active');
    const ativa = resposta.classList.contains('active');
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', activePergunta);
}
perguntas.forEach(eventosPerguntas);
// Perguntas Frequentes

// Galeria Bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    
    const media = matchMedia('(min-width: 934px').matches;
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria)
// Galeria Bicicletas

// Animacao
if (window.SimpleAnime) {
    new SimpleAnime();
}
// Animacao