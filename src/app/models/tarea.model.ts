export class Tarea {
    titulo: string;
    descripcion: string;

    constructor(pTitulo = '', pDescripcion = '') { //el valor por defecto es vacio
        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
    }
}