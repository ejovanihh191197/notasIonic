import { ListaItem } from './lista-item.model';
export class Lista {
    id: number;
    titulo: string;
    fechaInicio: Date;
    fechaTermino: Date;
    estado: boolean;
    items: ListaItem[];

    constructor( titulo: string ){
        this.titulo = titulo;
        this.estado = false;
        this.fechaInicio = new Date();
        this.id = new Date().getTime();
        this.items = [];
    }
}
