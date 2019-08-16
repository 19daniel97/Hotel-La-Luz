export class Politica {
    constructor(_id = '',  deposito = '',  cancelacion = '') {
        this._id = _id;
        this.deposito =deposito;
        this.cancelacion =cancelacion;
    }

    _id: string;
    deposito: string;
    cancelacion: string;
   
}
