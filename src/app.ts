// const btn = document.querySelector("button")!;

// btn.addEventListener("click", () => {
//   console.log("Click");
// });

type Person = {
  name: string;
  age?: number;
  location: {
    city: string;
  };

  showInfo: () => void;
};

const user: Person = {
  name: "Djon",
  age: 30,
  location: {
    city: "Lviv",
  },

  showInfo() {
    console.log(`My name is ${this.name} I am from ${this.location.city}`);
  },
};

const user12: Person = {
  name: "Mango",
  age: 30,
  location: {
    city: "Kyiv",
  },

  showInfo() {
    console.log(`My name is ${this.name} I am from ${this.location.city}`);
  },
};

// user.showInfo();
// user12.showInfo();
