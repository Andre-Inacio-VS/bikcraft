const formulario = document.querySelector("form");
const btn = document.querySelector("form .btn");

function formularioEnviado(resposta) {
    if (resposta.ok) {
        btn.innerText = 'Enviado!'
        alert('Formulario Enviado com Sucesso!');
    } else {
        alert('Erro ao enviar fomulario. Tente novamente mais tarde.');
        window.location.reload();
    }
}

function enviarFormulario(event) {
    event.preventDefault();
    btn.disabled = true;
    btn.innerText = "Enviando...";

    const data = new FormData(formulario);

    fetch("./enviar.php", {
        method: "post",
        body: data,
    }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);