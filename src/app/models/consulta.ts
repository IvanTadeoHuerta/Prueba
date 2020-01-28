import { Numero } from './numero';

export class Consulta {

    constructor(
        public fecha: Date,
        public numero: number,
        public numeros: Array<Numero>
    ){}
}
