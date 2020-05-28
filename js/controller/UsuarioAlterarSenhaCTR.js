import Mensagem from "../util/Mensagem.js";
import MenuRoles from "../util/MenuRoles.js";
import UsuarioService from "../services/UsuarioService.js";
import Roles from "../util/Roles.js";
import FormHelper from "../util/FormHelper.js";

const userService = new UsuarioService();
const usuario = userService.getUsuario();
var menuSair = document.getElementById('menuSair');
var menuUsuarioComum = document.getElementsByClassName('rolecomum');
var menuUsuarioAdmin = document.getElementsByClassName('roleadmin');
var senhaUsuario = document.getElementById('senhaUsuario');
var repetirSenha = document.getElementById('repetirSenha');
var inputs = document.getElementsByTagName('input');
var botao = document.getElementById('botao');

botao.addEventListener('click', alterar);

document.addEventListener('DOMContentLoaded', function() {
    if (!Roles.validarUsuario()) {
        location.href = 'login.html';
    } else {
        nomeUsuario.innerText = usuario.email_usuario;
        MenuRoles.montarMenu(menuUsuarioComum, menuUsuarioAdmin);
        MenuRoles.menuSair(menuSair);
    }
}, false);

function alterar() {
    if (!FormHelper.validar(inputs)) {
        Mensagem.alerta('Erro!', 'Digite os campos corretamente', 'error', 'OK');
    } else if (!FormHelper.validarSenhasIguais(senhaUsuario, repetirSenha)) {
        Mensagem.alerta('Erro!', 'Senhas incompatíveis!!', 'error', 'OK');
        FormHelper.limparCampos(inputs);
    } else {
        usuario.senha_usuario = senhaUsuario.value;
        userService.alterar(usuario).then((resposta) => {
            if (resposta != null) {
                Mensagem.alerta('Sucesso!', 'Dados atualizados com sucesso!', 'success', 'OK!', 'principal.html');
            } else {
                Mensagem.alerta('Erro!', 'Problemas ao atualizar os dados!', 'error', 'OK!');
            }
        });
    }
}