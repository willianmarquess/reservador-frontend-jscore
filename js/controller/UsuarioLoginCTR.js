import Usuario from "../model/Usuario.js";
import UsuarioService from '../services/UsuarioService.js';
import Mensagem from '../util/Mensagem.js';

var emailUsuario;
var senhaUsuario;
var botao;

emailUsuario = document.getElementById("emailUsuario");
senhaUsuario = document.getElementById("senhaUsuario");
botao = document.getElementById("botao");

botao.addEventListener('click', logar);


function logar() {
    if (validarCampos()) {
        const usuario = new Usuario(null, emailUsuario.value, senhaUsuario.value, null);
        const service = new UsuarioService();
        service.logar(usuario).then((usuarioLogado) => {
            if (usuarioLogado != null) {
                location.href = 'principal.html';
                service.setUsuario(usuarioLogado);
            } else {
                Mensagem.alerta('Erro', 'Usuário ou senha Incorretos!', 'error', 'OK');
            }
        });
    } else {
        Mensagem.alerta('Erro', 'Digite os campos corretamente', 'error', 'OK');
    }
}


function validarCampos() {
    return (emailUsuario.value != '' && senhaUsuario.value != '') ? true : false;
}