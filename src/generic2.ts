
//=====================================================================
function merge12<T extends number, U>(objA: T[], objB: U[]) {
  return [...objA, ...objB];
}

const merge11 = [11, 55, 77];
const merge22 = [22, "eref"];

const merged = merge12(merge11, merge22);
console.log("merged", merged);



//=====================================================================
const getName = <T, K>(name: T[], age: K[]) => {
  return [...name, ...age];
};

const userNameAndAge = getName<number, {friend: string}>  ([35,777], [{friend: "Ajax"}]);
console.log("userNameAndAge", userNameAndAge);



//=====================================================================
interface MyFirstInterfacew<T, K> {
  (arg: T, val: K): any;
}
  
const myIdentitw: MyFirstInterfacew <number, string> = <T, K>(arg: T,val: K) => {
  return [arg, val];
};

const resw = myIdentitw(777, '123');
// console.log("res", resw);

//=====================================================================
interface MyFirstInterface {
  <T, K>(arg: T, val: K): any;
}
  
// const myIdentit: MyFirstInterface = <T, K>(arg: T, val: K) => {
//   return [arg, val];
// };

let myIdentit: MyFirstInterface ;

myIdentit = <T, K>(arg: T, val: K) => {
  return [arg, val];
};

const res = myIdentit<number, number>(777, 147);
// console.log("res", res);


//======================================================================
type myType = {name: string ; age: number}

let myNumbers: Array <myType> 
myNumbers = [{name: "Djonson", age: 34}]
const res1 = myNumbers[0].name

//======================================================================
type Person1 = { name: string}
type Age = {age: number}

function add<T extends Person1, K extends Age> (x:  T, y: K) {
  
  return [x, y]
}

//=========Минимум основные свойства из type=========
const res2 = add({name: "Djonson", age: 34}, {age: 30, tag: "Poly"})
console.log("res2", res2);

// ===== Строго как в type============================
const res3 = add <Person1, Age>({name: "Djonson"}, {age: 30,})
console.log("res3", res3);









