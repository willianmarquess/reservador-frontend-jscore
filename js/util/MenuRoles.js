import UsuarioService from "../services/UsuarioService.js";

export default class MenuRoles {

    static montarMenu(menuUsuarioComum, menuUsuarioAdmin, noneAll) {

        var service = new UsuarioService();

        var arrayMenuUsuarioAdmin = Array.from(menuUsuarioAdmin);
        arrayMenuUsuarioAdmin.forEach(elemento => {
            if (!noneAll) {
                if (service.getRoleUsuario() == 'admin') {
                    elemento.style.display = 'block';
                } else {
                    elemento.style.display = 'none';
                }
            } else {
                elemento.style.display = 'none';
            }

        });
        var arrayMenuUsuarioComum = Array.from(menuUsuarioComum);
        arrayMenuUsuarioComum.forEach(elemento => {
            if (!noneAll) {
                if (service.getRoleUsuario() == 'comum') {
                    elemento.style.display = 'block';
                } else {
                    elemento.style.display = 'none';
                }
            } else {
                elemento.style.display = 'none';
            }
        });
    }

    static menuSair(menu) {

        var service = new UsuarioService();

        menu.addEventListener('click', () => {
            service.removeUsuario();
            location.href = 'login.html';
        });
    }
}