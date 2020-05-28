export default class FuncionarioService {
    async listar() {
        try {
            let resposta = await fetch('http://localhost:3000/funcionario');
            return resposta.json();
        } catch (error) {
            console.error(error);
        }
    }

    async cadastrar(funcionario) {
        try {
            let resposta = await fetch('http://localhost:3000/funcionario', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(funcionario)
            });
            return (resposta.status == 201) ? resposta.json() : null;
        } catch (error) {
            console.error(error);
        }
    }

    async alterar(funcionario) {
        try {
            let resposta = await fetch(`http://localhost:3000/funcionario/${funcionario.id_funcionario}`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(funcionario)
            });
            return (resposta.status == 201) ? resposta.json() : null;
        } catch (error) {
            console.error(error);
        }
    }

    async getfuncionarioExiste(id) {
        try {
            let resposta = await fetch(`http://localhost:3000/funcionarioUsuario/${id}`);
            return (resposta.status == 201 || resposta.status == 200) ? resposta.json() : null;
        } catch (error) {
            console.error(error);
        }
    }
}