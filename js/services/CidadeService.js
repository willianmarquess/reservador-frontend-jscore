export default class CidadeService {
    async listar() {
        try {
            let resposta = await fetch('http://localhost:3000/cidade');
            return resposta.json();
        } catch (error) {
            console.error(error);
        }
    }
}