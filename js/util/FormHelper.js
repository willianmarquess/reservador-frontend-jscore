export default class FormHelper {
    static validar(inputs) {
        let validar = 0;
        Array.from(inputs).forEach(elemento => {
            if (elemento.value == '') {
                validar++;
            }
        });
        return (validar > 0) ? false : true;
    }

    static limparCampos(inputs) {
        Array.from(inputs).forEach(elemento => {
            elemento.value = '';
        });
    }

    static validarSenhasIguais(input1, input2) {
        return (input1.value == input2.value) ? true : false;
    }
}