interface userInterface{
    name: string,
    email: string,
}

class UserManager{
    private users: userInterface[] = [];

    constructor() { }
    
    addUser(user: userInterface): void {
        if (!validationUser.isValidEmail(user.email)) throw new Error('Email invalide');
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


const userManager = new UserManager();
const peter2: userInterface = {name: 'Peter', email: 'fur@hotmail.fr'}
userManager.addUser(peter2)
