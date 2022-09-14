class House {
   street: string;
  private tenant: string[] = [];

  constructor( userStreet: string) {          // сокращение инициализации
    this.street = userStreet;
  }

  showAddress(this: House, word: number): void {
    console.log("Address:" + " " + this.street + ' ' + word);
  }

  setTenant(this: House, name: string): void {
    this.tenant.push(name);
  }

  showTenants(this: House): void {
    console.log(this.tenant);
  }
}

const house = new House("Lermontova");
house.showAddress(147);
house.setTenant("Max");
house.showTenants();

// const copyHouse = {
//   street: "Gagarina Str.",
//   showAddres: house.showAddress,
// };
// copyHouse.showAddres(214)



// function   showAddres(this: any): void {
//   console.log("Address:" + " " + this.street);
// }

// house.showAddress.call(copyHouse, 214)

// copyHouse.showAddress()

// house.tenant.push("Alex"); // Property 'tenant' is private and only accessible within class 'House'.
// house.showTenants();

// const ddd = house.street  // Property 'street' is private and only accessible within class 'House'.
// console.log("ddd", ddd);
