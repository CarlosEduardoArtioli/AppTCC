// Model dos dados do dispositivo

export class Dispositivos {
    constructor(
       public $key: string = '',
       public name: string = '',
       public status: string = '',
       public mac: string = '',
       public icon: string = '',
       public room: string = '',
       public timer: string = null,
       public week: string = null
    ) {} 
}

// Models são os "Modelos" de dados que vão ser enviados ao banco
// Para mais informações assistir o curso "Frontend Developer"
// Curso Angular 8, Ionic 4 e Firebase