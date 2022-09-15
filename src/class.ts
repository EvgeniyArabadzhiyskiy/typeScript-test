class User {
  private _age: number = 25;
  static secret = 12345;

  constructor(public name: string, public nickName: string) {}

  getPass(): string {
    return `password ${this.name}${User.secret}`;
  }

  getInfo(): void {
    console.log(`AGE ${this._age}`);
  }

  changeAge(userAge: number): void {
    this._age = userAge;
  }

  set age(userAge: number) {
    this._age = userAge;
  }

  get age(): number {
    return this._age;
  }
}

const djon = new User("Max", "Djon");
console.log("getPass", djon.getPass());
djon.getInfo();

djon.changeAge(35); // changeAge
djon.age = 23; // set setAge
// djon.getInfo();

console.log("age", djon.age);
