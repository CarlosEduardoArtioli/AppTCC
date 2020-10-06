// Model dos dados do dispositivo

export class Dispositivos {
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
        public status: string,
        public timer: {
            timer1: {
               action: string,
               show: boolean,
               timer: string,
               week1: string,
               week2: string,
               week3: string,
               week4: string,
               week5: string,
               week6: string,
               week7: string,
            },
            timer2: {
                action: string,
                show: boolean,
                timer: string,
                week1: string,
                week2: string,
                week3: string,
                week4: string,
                week5: string,
                week6: string,
                week7: string,
             },
             timer3: {
                action: string,
                show: boolean,
                timer: string,
                week1: string,
                week2: string,
                week3: string,
                week4: string,
                week5: string,
                week6: string,
                week7: string,
             },
             timer4: {
                action: string,
                show: boolean,
                timer: string,
                week1: string,
                week2: string,
                week3: string,
                week4: string,
                week5: string,
                week6: string,
                week7: string,
             }
        }
    ) { }
}

// Models são os "Modelos" de dados de um objeto
