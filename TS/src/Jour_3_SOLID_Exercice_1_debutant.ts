interface userInterface{
    name: string,
    email: string,
}

class UserManager{
    private users: userInterface[] = [];

    constructor(private name: string, private email: string) {
        if (!validationUser.isValidEmail(email)) throw new Error('Email invalide');
        this.addUser({name : this.name, email : this.email});
    }
    
    addUser(user: userInterface): void {
        //// Sauvegarde
        if(!this.users) throw Error ("Problème de la DataBase");
        if(!UserRepository.save(this.users, user)) throw Error ("Problème lors de la sauvegarde")
        console.log("Utilisateur créé avec succès")
        //// Notification
        sendWelcomeNotification.welcome(user)
    }
}

class validationUser{
    static isValidEmail(email: string): boolean {
        return email.includes('@');
    }
}

class UserRepository {
    static save(users: userInterface[], user: userInterface): boolean {
        if (!users.push(user)) return false;
        console.log('Sauvegarde dans la base de donnée...');
        return true;
    }
}

class sendWelcomeNotification{
    static welcome(user: userInterface){
        console.log(`Bienvenue ${user.name}`);
    }
}


const peter2 = new UserManager('Peter', 'fur@hotmail.fr')
