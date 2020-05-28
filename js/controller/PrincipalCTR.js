import UsuarioService from '../services/UsuarioService.js';
import MenuRoles from '../util/MenuRoles.js';
import Roles from '../util/Roles.js';
import FuncionarioService from '../services/FuncionarioService.js';
import Mensagem from '../util/Mensagem.js';

const userService = new UsuarioService();
const usuario = userService.getUsuario();
const funcService = new FuncionarioService();
var nomeUsuario = document.getElementById('nomeUsuario');
var menuSair = document.getElementById('menuSair');
var menuUsuarioComum = document.getElementsByClassName('rolecomum');
var menuUsuarioAdmin = document.getElementsByClassName('roleadmin');

document.addEventListener('DOMContentLoaded', function() {
    if (!Roles.validarUsuario()) {
        location.href = 'login.html';
    } else {
        funcService.getfuncionarioExiste(usuario.id_usuario).then(resultado => {
            if (resultado != null) {
                console.log(resultado);

                nomeUsuario.innerText = usuario.email_usuario;
                MenuRoles.montarMenu(menuUsuarioComum, menuUsuarioAdmin);
            } else {
                Mensagem.alerta('Cadastro incompleto', 'Antes de mais nada, termine o seu cadastro!! Você será redirecionado para a página correta!!', 'info', 'Ok! Entendi', 'meus-dados.html');
            }
        });
    }
}, false);

menuSair.addEventListener('click', () => {
    userService.removeUsuario();
    location.href = 'login.html';
});