import CidadeService from "../services/CidadeService.js";

export default class GeraSelectCidade {


    static async getSelect() {
        const service = new CidadeService();
        return service.listar().then((cidades) => {
            var lista = '';
            cidades.forEach(cidade => {
                lista += `<option value='${cidade.id_cidade}' id='${cidade.id_cidade}'>${cidade.nome_cidade} / ${cidade.sigla_estado}</option>`;
            });
            return lista;
        });
    }
}