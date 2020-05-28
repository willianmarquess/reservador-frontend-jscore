import UsuarioService from "../services/UsuarioService.js";

export default class Roles {
    static validarUsuario(role = null) {
        var service = new UsuarioService();
        if (role == null) {
            return (service.getUsuario() != null) ? true : false;
        }
        return (service.getUsuario() != null && service.getRoleUsuario() == role) ? true : false;
    }
}