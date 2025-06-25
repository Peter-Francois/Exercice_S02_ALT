class AppConfig {
  // TODO: Implémentation singleton
  // TODO: Stockage des configurations
  // TODO: Méthodes get/set
  
  private static instance: AppConfig;
  private constructor(public publicKey : string){}
  
  static getInstance(): AppConfig{
    if(!this.instance){
        this.instance = new AppConfig('abcd1234');
    }
    return this.instance
  }
}

const conf = AppConfig.getInstance()
const conf2 = AppConfig.getInstance()
console.log(conf.publicKey)
console.log(conf2.publicKey)
conf.publicKey = "hola"
console.log(conf.publicKey)
console.log(conf2.publicKey)