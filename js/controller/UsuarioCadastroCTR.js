import Usuario from "../model/Usuario.js";
import UsuarioService from '../services/UsuarioService.js';
import Mensagem from '../util/Mensagem.js';
import FormHelper from "../util/FormHelper.js";

var emailUsuario = document.getElementById("emailUsuario");
var senhaUsuario = document.getElementById("senhaUsuario");
var botao = document.getElementById("botao");
var tipoUsuario = document.getElementById("tipoUsuario");
var inputs = document.getElementsByTagName("input");

botao.addEventListener('click', cadastrar);

function cadastrar() {
    if (FormHelper.validar(inputs)) {
        const usuario = new Usuario(null, emailUsuario.value, senhaUsuario.value, tipoUsuario.value);
        const service = new UsuarioService();
        service.cadastrar(usuario).then((dados) => {
            if (dados != null) {
                Mensagem.alerta('Sucesso!', 'Usuário cadastrado com sucesso!', 'success', 'OK!', 'login.html');

            } else {
                Mensagem.alerta('Erro!', 'Problemas ao cadastrar usuário! Tente mais tarde!', 'error', 'OK!');
            }
        });
    } else {
        Mensagem.alerta('Erro!', 'Digite os campos corretamente', 'error', 'OK');
    }
}