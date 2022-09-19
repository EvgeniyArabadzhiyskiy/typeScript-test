interface IPerson {
  readonly name: string;
  age?: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPilot, IPerson {
  constructor(public name: string, public age: number) {
    this.checkAge();
  }

  public checkAge(): void {
    if (this.age < 28) {
      console.log("Pilot is young");
    }
  }

  greet(phrase: string): void {
    console.log(`My name is ${this.name} I am ${phrase} `);
  }

  flyMessage(): void {
    console.log("Самолет набирает высоту приятного полета ");
  }
}

const pilot = new Pilot("Alex", 35);

pilot.greet("Happy");
