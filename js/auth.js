import { usuariosSistema } from "../dados/usuarios-sistema.js";

export function login(email, senha) {
    return new Promise(function (resolve, reject) {
        const usuarioEncontrado = usuariosSistema.find(function (item) {
            return item.email === email;
        });

        if (usuarioEncontrado && usuarioEncontrado.senha === senha) {
            console.log("Login bem-sucedido!");
            resolve(usuarioEncontrado);
        } else {
            console.log("Email ou senha incorretos.");
            reject(new Error("Dados incorretos. Favor verificar e tentar novamente."));
        }
    });
}