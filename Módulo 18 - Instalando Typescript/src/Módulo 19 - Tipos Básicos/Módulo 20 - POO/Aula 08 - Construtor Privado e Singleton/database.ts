//Singleton - GoF | Factory Method - GoF
export class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
  //Metódo que cria um novo objeto
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada!');
      return Database.database;
    }
    console.log('Criando nova instância');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const database1 = Database.getDatabase('localhost', 'root', '123456');
database1.connect();
const database2 = Database.getDatabase('localhost', 'root', '123456');
database2.connect();

console.log(database1 === database2);
