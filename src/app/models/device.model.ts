// Model dos dados do dispositivo

export class Dispositivo {
   constructor(
      public $key: string,
      public ap: string,
      public icon: {
         icon: string,
         iconName: string,
      },
      public mac: string,
      public name: string,
      public room: {
         iconRoom: string,
         name: string,
      },
      public status: string
   ) { }
}

// Models são os "Modelos" de dados de um objeto
