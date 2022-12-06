export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    // email?: string;
    token?: string;
    msg?: string;
}

export class Auth {
    id: string;
    correo: string;
    password: string;
    usuario: string;

    constructor(id:string, usuario: string, password:string, correo:string) {
        this.id = id;
        this.usuario = usuario;
        this.password = password;
        this.correo = correo;
        }

}