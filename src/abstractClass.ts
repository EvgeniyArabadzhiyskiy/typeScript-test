// ====================== User1 ================================
abstract class User2 {
  static secret: number = 1256;

  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hello I am ${this.name}`);
  }

  abstract getPass(phrase: string): string;
}

// ====================== Djon ================================
class Djon2 extends User2 {
  constructor(age: number, public tag: string) {
    super("Djon_ua", age);
  }

  getPass(phrase: string): string {
    return `password ${phrase}${User2.secret}${this.tag}`;
  }
}

const djonny2 = new Djon2(20, "Kitty");
// console.log("djonny2", djonny2);
// djonny2.greet();
// console.log("djonny", djonny2.getPass("Ya-bi-dy-ba-du"));
