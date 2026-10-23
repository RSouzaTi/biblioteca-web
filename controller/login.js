const linkEsqueceuSenha = document.getElementById("esqueceu-senha");
linkEsqueceuSenha.addEventListener("click", function(evento) {
    evento.preventDefault();
    window.alert("Esta funcionalidade está em construção.");
});

const formularioLogin = document.querySelector("#form-login")
formularioLogin.addEventListener("submit", function(evento) {
    evento.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    console.log(email, senha);
});