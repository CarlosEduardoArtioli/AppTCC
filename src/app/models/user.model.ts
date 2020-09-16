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

// Models são os "Modelos" de dados de um objeto
