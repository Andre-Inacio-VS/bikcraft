// Links Menu
const links = document.querySelectorAll('.header-menu a');

function activeLink(item) {
 let urlAtual = document.location.href;
 let link = item.href
 if (urlAtual.includes(link)) {
  item.classList.add('active');
 }
}

links.forEach(activeLink);
// Links Menu

// Itens Orcamento

const params = new URLSearchParams(location.search);
console.log(params)

function activeProdutos(parametro) {
 const element = document.getElementById(parametro)
 if (element) {
  element.checked = true
 }
}

params.forEach(activeProdutos)

// Itens Orcamento