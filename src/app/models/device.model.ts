// Model dos dados do dispositivo

export class Dispositivos {
    constructor(
       public $key: string = '',
       public name: string = '',
       public status: string = '',
       public mac: string = '',
       public icon: string = '',
       public room: string = '',
       public timer: null,
       public week1: null,
       public week2: null,
       public week3: null,
       public week4: null,
       public week5: null,
       public week6: null,
       public week7: null,
    ) {}
}

// Models são os "Modelos" de dados que vão ser enviados ao banco
// Para mais informações assistir o curso "Frontend Developer"
// Curso Angular 8, Ionic 4 e Firebase
