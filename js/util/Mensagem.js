import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@9/src/sweetalert2.js';

export default class Mensagem {
    static alerta(titulo, texto, icone, textoBotao, url) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: icone,
            confirmButtonText: textoBotao
        }).then(() => {
            if (url != null) {
                location.href = url;
            }
        });
    }
}