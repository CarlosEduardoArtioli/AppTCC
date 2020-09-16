// Model dos dados do dispositivo

export class Dispositivos {
    constructor(
        public $key: string = '',
        public name: string = '',
        public status: string = '',
        public mac: string = '',
        public icon: string = '',
        public room: string = '',
    ) { }
}

// Models são os "Modelos" de dados de um objeto
