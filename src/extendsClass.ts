// ====================== User1 ================================
class User1 {
  protected nickName: string = "Mango";
  static secret = 12345;

  constructor(public name: string, public age: number) {}

  getPass(phrase: string): string {
    return `password ${this.name}${User1.secret}${phrase}`;
  }
}
// ====================== Djon ================================
class Djon extends User1 {
  constructor(age: number, public tag: string) {
    super("Djon_ua", age);
  }

  //   getPass(): string {
  //     return `password ${this.name}${User1.secret}${this.tag}`;
  //   }
}

const userMango = new User1("Max", 32);
console.log("userMango", userMango.getPass("Ku-Ka-Re-Ku"));

const djonny = new Djon(20, "Kitty");
console.log("djonny", djonny);
console.log("djonny", djonny.getPass("Ya-bi-dy-ba-du"));

console.log("djonny", djonny.getPass(djonny.tag));
