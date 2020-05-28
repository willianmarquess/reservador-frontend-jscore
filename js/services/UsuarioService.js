export default class UsuarioService {
    async listar() {
        try {
            let resposta = await fetch('http://localhost:3000/usuario');
            let dados = resposta.json();
            return dados;
        } catch (error) {
            console.error(error);
        }
    }

    async cadastrar(usuario) {
        try {
            let resposta = await fetch('http://localhost:3000/usuario', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });
            return (resposta.status == 201) ? resposta.json() : null;
        } catch (error) {
            console.error(error);
        }
    }

    async logar(usuario) {
        try {
            let resposta = await fetch('http://localhost:3000/usuarioLogin', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(usuario)
            });
            let dados = resposta.json();

            return dados;
        } catch (error) {
            console.error(error);
        }
    }

    async alterar(usuario) {
        try {
            let resposta = await fetch(`http://localhost:3000/usuario/${usuario.id_usuario}`, {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });
            let dados = resposta.json();

            return dados;
        } catch (error) {
            console.error(error);
        }
    }

    getUsuario() {
        return (localStorage.getItem('usuario') == null) ? null : JSON.parse(localStorage.getItem('usuario'))[0];
    }

    setUsuario(usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
    }

    removeUsuario() {
        localStorage.removeItem('usuario');
    }

    getRoleUsuario() {
        return (localStorage.getItem('usuario') == null) ? null : JSON.parse(localStorage.getItem('usuario'))[0].tipo_usuario;
    }

    getIdUsuario() {
        return (localStorage.getItem('usuario') == null) ? null : JSON.parse(localStorage.getItem('usuario'))[0].id_usuario;
    }
}