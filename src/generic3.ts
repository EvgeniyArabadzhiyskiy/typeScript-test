interface IName {
  name: string;
}

const dataUser: IName[] = [{ name: "Mango" }, { name: "Poly" }];

// class ArrayAny {
//   constructor(public component: IName[]) {}

//   getType(user: IName): IName | undefined {
//     const person = this.component.find((i) => i.name === user.name);
//     // console.log("ArrayAny<Type> ~ person ~ person", person);

//     return person || undefined;
//   }
// }

// const num = new ArrayAny(dataUser);
// const reswe = num.getType({ name: "Poly" });
// console.log("reswe", reswe);

async function getPromise() :Promise<number> {
  const jresult = Promise.resolve(333)
  // const jresult: number = 7777

 

  const resdata = await jresult;
  console.log("getPromise ~ resdata", resdata);
  return resdata;
}

getPromise();

function getTypew<T>(user: T): T[] {
  const array: T[] = [];
  array.push(user);

  return array;
  // return dataUser.filter((i) => i.name === user.name);

  //   return dataUser.find((i) => {
  //     console.log("i.name", i.name === user);

  //     return i.name === user;
  //   });

  //   console.log("ArrayAny<Type> ~ person ~ person", person);

  // return person || undefined
}

const reswe = getTypew<number>(55);
console.log("reswe", reswe);

console.log("hello");
