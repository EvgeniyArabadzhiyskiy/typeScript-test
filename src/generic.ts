// let arr: Array<string | number>;

// arr = ["rrr", 444];

const promise: Promise<string> = new Promise((resolve) => {
  resolve("djon");
});

promise.then((data) => {
  console.log("promise.then ~ data", data);
});

(() => {
  async function promiseFoo(): Promise<number> {
    const data4 = await Promise.resolve(555);
    console.log("promiseFoo ~ data4", data4);
    return data4;
  }

  promiseFoo();

  // promiseFoo().then(data4 => {
  //     console.log("promiseFoo ~ data", data4);
  // })
})();

function merge<T, U>(objA: T, objB: U) {
  console.log("objA", objA);
  console.log("objB", objB);
  // return objA.length
  //   return Object.assign({}, objA, objB);
}

// const merge1 = {
//   name: "Djon",
// };

const merge1 = "Djon";

const merge2 = {
  age: 32,
};

const resultMerge = merge(merge1, merge2);
console.log("resultMerge", resultMerge);

// resultMerge.name = "Mango";


