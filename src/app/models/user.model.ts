// Model dos dados do usuário

export class User {
    constructor(
        public uid: string,
        public email: string,
        public displayName: string,
        public emailVerified: boolean,
        public photoURL: string
    ) { }
}

// Models são os "Modelos" de dados que vão ser enviados ao banco
// Para mais informações assistir o curso "Frontend Developer"
// Curso Angular 8, Ionic 4 e Firebase
