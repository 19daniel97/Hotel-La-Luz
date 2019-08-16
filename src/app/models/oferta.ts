export class Oferta {
    
    constructor(_id = '', name = '', characteristics = '',
        prize = 0){
            this._id = _id;
            this.name = name;
            this.characteristics = characteristics;
            this.prize = prize;
    
        }
    
    
        _id: string;
        name: string;
        characteristics: string;
        prize: number;
    }
    
    
