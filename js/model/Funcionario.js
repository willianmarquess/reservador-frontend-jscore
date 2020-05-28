export default class Funcionario {
    constructor(id_funcionario, nome_funcionario, rg_funcionario, cpf_funcionario, cargo_funcionario,
        endereco_funcionario, empresa_funcionario, usuario_funcionario, cidade_funcionario) {

        this.id_funcionario = id_funcionario;
        this.nome_funcionario = nome_funcionario;
        this.rg_funcionario = rg_funcionario;
        this.cpf_funcionario = cpf_funcionario;
        this.cargo_funcionario = cargo_funcionario;
        this.endereco_funcionario = endereco_funcionario;
        this.empresa_funcionario = empresa_funcionario;
        this.usuario_funcionario = usuario_funcionario;
        this.cidade_funcionario = cidade_funcionario;

    }
}