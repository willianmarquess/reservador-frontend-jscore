import Roles from "../util/Roles.js";
import MenuRoles from "../util/MenuRoles.js";
import UsuarioService from "../services/UsuarioService.js";
import GeraSelectCidade from "../util/GeraSelectCidades.js";
import Mensagem from "../util/Mensagem.js";
import Funcionario from "../model/Funcionario.js";
import FuncionarioService from "../services/FuncionarioService.js";
import FormHelper from "../util/FormHelper.js";

const userService = new UsuarioService();
const usuario = userService.getUsuario();
var nomeUsuario = document.getElementById('nomeUsuario');
var menuSair = document.getElementById('menuSair');
var menuUsuarioComum = document.getElementsByClassName('rolecomum');
var menuUsuarioAdmin = document.getElementsByClassName('roleadmin');
var botao = document.getElementById("botao");

var idFuncionario = null;
var nomeFuncionario = document.getElementById('nomeFuncionario');
var rgFuncionario = document.getElementById('rgFuncionario');
var cpfFuncionario = document.getElementById('cpfFuncionario');
var cargoFuncionario = document.getElementById('cargoFuncionario');
var selectCidade = document.getElementById('cidades');
var enderecoFuncionario = document.getElementById('enderecoFuncionario');

var inputs = document.getElementsByTagName('input');

const service = new FuncionarioService();
botao.addEventListener('click', cadastrar);

document.addEventListener('DOMContentLoaded', function() {
    if (!Roles.validarUsuario()) {
        location.href = 'login.html';
    } else {
        nomeUsuario.innerText = usuario.email_usuario;
        carregarCidades();
    }
}, false);

menuSair.addEventListener('click', () => {
    userService.removeUsuario();
    location.href = 'login.html';
});

function carregarCidades() {
    GeraSelectCidade.getSelect().then((lista) => {
        selectCidade.innerHTML = lista;
        verificarFuncionarioExiste(usuario);
    });
}

function cadastrar() {
    if (FormHelper.validar(inputs)) {
        const funcionario = new Funcionario(null, nomeFuncionario.value, rgFuncionario.value,
            cpfFuncionario.value, cargoFuncionario.value, enderecoFuncionario.value,
            null, userService.getIdUsuario(), selectCidade.value);

        if (idFuncionario == null) {
            service.cadastrar(funcionario).then((dados) => {
                if (dados != null) {
                    Mensagem.alerta('Sucesso!', 'Dados atualizados com sucesso!', 'success', 'OK!', 'principal.html');
                } else {
                    Mensagem.alerta('Erro!', 'Problemas ao atualizar os dados!', 'error', 'OK!');
                }
            });
        } else {
            funcionario.id_funcionario = idFuncionario;
            service.alterar(funcionario).then((dados) => {
                if (dados != null) {
                    Mensagem.alerta('Sucesso!', 'Dados atualizados com sucesso!', 'success', 'OK!', 'principal.html');
                } else {
                    Mensagem.alerta('Erro!', 'Problemas ao atualizar os dados!', 'error', 'OK!');
                }
            });
        }

    } else {
        Mensagem.alerta('Erro!', 'Digite os campos corretamente', 'error', 'OK');
    }
}

/* caso o funcionário exista carrega os dados dela ná página para futuras alterações,
   caso não exista, deixamos as opções do menu ocultas, para forçar o usuário a terminar o seu cadastro     
*/
function verificarFuncionarioExiste(usuario) {
    service.getfuncionarioExiste(usuario.id_usuario).then((result) => {
        if (result != null) {
            idFuncionario = result[0].id_funcionario;
            nomeFuncionario.value = result[0].nome_funcionario;
            rgFuncionario.value = result[0].rg_funcionario;
            cpfFuncionario.value = result[0].cpf_funcionario;
            cargoFuncionario.value = result[0].cargo_funcionario
            enderecoFuncionario.value = result[0].endereco_funcionario;
            document.getElementById(`${result[0].cidade_funcionario}`).selected = true;
            MenuRoles.montarMenu(menuUsuarioComum, menuUsuarioAdmin);
        } else {
            MenuRoles.montarMenu(menuUsuarioComum, menuUsuarioAdmin, true);
        }
    });
}